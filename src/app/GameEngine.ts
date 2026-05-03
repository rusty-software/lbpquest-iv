import { CommandType } from "./CommandType";
import { Constants } from "./Constants";
import { Direction } from "./Direction";
import {
  GameErrorEvent,
  GameEvent,
  HelpEvent,
  InventoryEvent,
  ItemEvent,
  LocationChangeEvent,
  NewInputEvent,
  WinEvent,
} from "./events";
import { GameError } from "./GameError";
import { Item } from "./Item";
import { ItemKey } from "./items";
import { BlantonsBottle } from "./items/BlantonsBottle";
import { Gerald } from "./items/Gerald";
import { Location } from "./Location";
import { LocationKey } from "./locations";
import { QuestTracker } from "./QuestTracker";
import { ItemSaveState, SaveGame } from "./SaveGame";
import { Startup } from "./Startup";

export class GameEngine {
  public currentLocation: Location;
  public score: number;
  public actionCount: number;
  public display: string;
  public events: GameEvent[];
  public readonly questTracker: QuestTracker;
  public visitedLocations: Set<LocationKey>;

  public get isOver(): boolean {
    return this.questTracker.isComplete(Constants.Quests.Win);
  }

  private readonly inventory: Item[];
  private items: Map<ItemKey, Item> = new Map();
  private locations: Map<LocationKey, Location> = new Map();

  private geraldLocationKey: LocationKey = LocationKey.EntranceRoad;
  private geraldKeyTheftDone: boolean = false;
  private geraldPatrolIndex: number = 0;
  private lastGeraldMoveAt: number = 0;

  private readonly geraldPatrol: LocationKey[] = [
    LocationKey.EntranceRoad,
    LocationKey.GeraldTree,
    LocationKey.NorthField,
    LocationKey.OakGroveSouth,
    LocationKey.ParkingArea,
  ];

  public init(): void {
    Startup.init();
    this.items = Startup.items;
    this.locations = Startup.locations;
    for (const [locationKey, location] of this.locations) {
      for (const item of location.items) {
        item.currentLocationKey = locationKey;
      }
    }
  }

  public constructor() {
    this.init();

    this.score = 0;
    this.actionCount = 0;
    this.questTracker = new QuestTracker();
    this.visitedLocations = new Set();

    this.currentLocation = this.getLocation(LocationKey.EntranceRoad);
    this.display = this.currentLocation.description();

    // ============================================================
    // HACK ZONE — comment out before shipping
    // ============================================================
    // {
    //   const porch = this.getLocation(LocationKey.WhiskeyRoomPorch);
    //   const whiskeyRoom = this.getLocation(LocationKey.WhiskeyRoom);
    //   porch.neighbors.set("w" as Direction, whiskeyRoom);
    //   whiskeyRoom.neighbors.set("e" as Direction, porch);
    //   this.questTracker.complete(Constants.Quests.CabinCodeEntered, this);
    //   this.currentLocation = porch;
    // }
    // // ============================================================
    // END HACK ZONE
    // ============================================================
    this.inventory = [];
    this.events = [];
  }

  public getEvents(): GameEvent[] {
    return this.events;
  }

  private parseCommand(input: string): CommandType | undefined {
    const cmdText = input.split(" ").shift()!;
    return CommandType.values.find(
      (type) => cmdText === type.name.toLowerCase(),
    );
  }

  public send(input: string) {
    if (this.isOver) return;
    const lowerInput = input.toLowerCase().trim();
    const cmd = this.parseCommand(lowerInput);
    const rest = lowerInput.substr(!!cmd ? cmd.name.length + 1 : 0);

    this.events.push(new NewInputEvent(input));
    switch (cmd) {
      case CommandType.n:
      case CommandType.s:
      case CommandType.e:
      case CommandType.w:
      case CommandType.ne:
      case CommandType.nw:
      case CommandType.se:
      case CommandType.sw:
      case CommandType.up:
      case CommandType.down: {
        this.actionCount++;
        this.move(lowerInput as Direction);
        break;
      }

      case CommandType.l:
      case CommandType.look: {
        this.changeLocation(this.currentLocation);
        break;
      }

      case CommandType.enter: {
        this.actionCount++;
        if (this.currentLocation.id === LocationKey.WhiskeyRoomPorch) {
          if (
            rest === "3721" &&
            !this.questTracker.isComplete(Constants.Quests.CabinCodeEntered)
          ) {
            this.questTracker.complete(Constants.Quests.CabinCodeEntered, this);
            const porch = this.currentLocation;
            const whiskeyRoom = this.getLocation(LocationKey.WhiskeyRoom);
            porch.neighbors.set("w" as Direction, whiskeyRoom);
            whiskeyRoom.neighbors.set("e" as Direction, porch);
            this.events.push(
              new ItemEvent(
                "You enter 3-7-2-1. Four soft tones in sequence. A click — distinct and satisfied — and the door swings open on cedar and woodsmoke. Warm amber light spills out from inside.\n\nYou can go west to enter.",
              ),
            );
          } else if (
            this.questTracker.isComplete(Constants.Quests.CabinCodeEntered)
          ) {
            this.events.push(new ItemEvent("The door is already open."));
          } else if (/^\d+$/.test(rest)) {
            this.events.push(
              new ItemEvent(
                "The keypad responds with two flat beeps. The door does not open.",
              ),
            );
          } else {
            this.events.push(new GameErrorEvent(GameError.UnknownCommand, ""));
          }
        } else {
          this.events.push(
            new ItemEvent("There's nothing here that accepts a code."),
          );
        }
        break;
      }

      case CommandType.ex:
      case CommandType.examine: {
        this.actionCount++;
        const item = this.getAvailableItemByName(rest);
        if (item) {
          this.events.push(new ItemEvent(item!.examine(this)));
        } else {
          const locationVerb = this.currentLocation.customVerbs.get(
            `examine ${rest}`,
          );
          if (locationVerb) {
            this.events.push(new ItemEvent(locationVerb(this)));
          }
        }
        break;
      }

      case CommandType.inv:
      case CommandType.inventory: {
        this.events.push(new InventoryEvent(this.inventory));
        break;
      }

      case CommandType.help: {
        const visibleCommands = CommandType.values
          .filter((cmd) => cmd.visible)
          .map((cmd) => cmd.name);
        this.events.push(new HelpEvent(visibleCommands));
        break;
      }

      case CommandType.save: {
        this.save();
        this.events.push(new ItemEvent("Game saved."));
        break;
      }

      case CommandType.take: {
        this.actionCount++;
        const locationItem = this.getLocationItemByName(rest);
        if (locationItem) {
          if (locationItem.canTake(this)) {
            this.score += !locationItem.taken ? locationItem.value : 0;
            locationItem.taken = true;
            locationItem.currentLocationKey = LocationKey._Nowhere;
            this.inventory.push(locationItem);
            this.currentLocation.items.splice(
              this.currentLocation.items.indexOf(locationItem),
              1,
            );
          }
          this.events.push(new ItemEvent(locationItem.take(this)));
        } else if (this.getInventoryItemByName(rest)) {
          this.events.push(
            new ItemEvent(`You're already carrying the ${rest}.`),
          );
        } else {
          if (this.getItemByName(rest)) {
            this.events.push(
              new GameErrorEvent(
                GameError.NoItem,
                `Sorry, there is no ${rest} here.`,
              ),
            );
          } else {
            this.events.push(
              new GameErrorEvent(
                GameError.UnknownItem,
                `Sorry, ${rest} is not a real or take-able item.`,
              ),
            );
          }
        }
        break;
      }

      case CommandType.drop: {
        this.actionCount++;
        const inventoryItem = this.getInventoryItemByName(rest);
        if (inventoryItem) {
          inventoryItem.currentLocationKey = this.currentLocation.id;
          this.currentLocation.items.push(inventoryItem);
          this.inventory.splice(this.inventory.indexOf(inventoryItem), 1);
          this.events.push(new ItemEvent(inventoryItem.drop(this)));
        } else {
          const locationItem = this.getLocationItemByName(rest);
          if (locationItem) {
            if (locationItem.canTake(this)) {
              this.events.push(
                new GameErrorEvent(
                  GameError.NoItem,
                  "Maybe try taking it first...?",
                ),
              );
            } else {
              this.events.push(
                new GameErrorEvent(
                  GameError.NoItem,
                  `You cannot drop the ${locationItem.name}. Ever.`,
                ),
              );
            }
          } else {
            if (this.getItemByName(rest)) {
              this.events.push(new GameErrorEvent(GameError.NoItem, ""));
            } else {
              this.events.push(
                new GameErrorEvent(
                  GameError.UnknownItem,
                  `Sorry, ${rest} is not a real or droppable item.`,
                ),
              );
            }
          }
        }
        break;
      }

      case CommandType.use: {
        this.actionCount++;
        const item = this.getAvailableItemByName(rest);
        if (item) {
          this.events.push(new ItemEvent(item.use(this)));
        } else {
          if (this.getItemByName(rest)) {
            this.events.push(
              new GameErrorEvent(
                GameError.NoItem,
                `Sorry, there is no ${rest} here.`,
              ),
            );
          } else {
            this.events.push(
              new GameErrorEvent(
                GameError.UnknownItem,
                `Sorry, ${rest} is not a real or usable item.`,
              ),
            );
          }
        }
        break;
      }

      default: {
        const targetItem = this.currentLocation.items
          .concat(this.inventory)
          .find((item) => input.toLowerCase().endsWith(item.name));

        if (targetItem) {
          const customVerbText = lowerInput.substr(
            0,
            lowerInput.length - (targetItem.name.length + 1),
          );
          const customVerb = targetItem.customVerbs.get(customVerbText);
          if (customVerb) {
            this.actionCount++;
            this.events.push(new ItemEvent(customVerb(this)));
          } else {
            this.events.push(new GameErrorEvent(GameError.UnknownCommand, ""));
          }
        } else {
          const customVerb = this.currentLocation.customVerbs.get(lowerInput);
          if (customVerb) {
            this.actionCount++;
            this.events.push(new ItemEvent(customVerb(this)));
          } else {
            this.events.push(new GameErrorEvent(GameError.UnknownCommand, ""));
          }
        }
        break;
      }
    }

    this.updateGeraldPatrol();
  }

  public changeLocation(location: Location): void {
    location.gameEngine = this;
    this.currentLocation = location;
    this.visitedLocations.add(location.id);

    if (
      location.id === LocationKey.OakGroveNorth &&
      this.inventoryContains(ItemKey.OrderNote) &&
      !this.geraldKeyTheftDone
    ) {
      this.triggerGeraldTheft();
    }

    this.events.push(
      new LocationChangeEvent(location.title, location.description()),
    );

    if (location.id === LocationKey.WhiskeyRoom) {
      const firstVisit = this.questTracker.complete(Constants.Quests.Win, this);
      if (firstVisit) {
        this.events.push(
          new WinEvent(
            'And here, finally: your friends. Someone is in the corner chair with a whiskey. Someone else is at the bar, mid-explanation of a card game to a person who is clearly not listening. They look up when you come in.\n\n"There you are," someone says. "We\'ve been here for an hour. Grab a glass."\n\nYou do.\n\nThe walk through the property — the field, the grove, the turkey, all of it — becomes a story you\'ll tell at this bar, in this room, at the end of these string lights, before the weekend is done.',
          ),
        );
      }
    }
  }

  private hasActiveFlashlight(): boolean {
    return (
      this.inventoryContains(ItemKey.Flashlight) &&
      this.questTracker.isComplete(Constants.Quests.FlashlightActivated)
    );
  }

  private hasLitLantern(): boolean {
    return (
      this.inventoryContains(ItemKey.PropaneLantern) &&
      this.questTracker.isComplete(Constants.Quests.LanternLit)
    );
  }

  public move(direction: Direction): void {
    const newLocation = this.currentLocation.neighbors.get(direction);
    if (newLocation) {
      if (
        newLocation.isDark &&
        !(this.hasActiveFlashlight() || this.hasLitLantern())
      ) {
        this.events.push(
          new GameErrorEvent(
            GameError.InvalidPath,
            "It's too dark to go that way. You'd need a light source.",
          ),
        );
        return;
      }
      newLocation.enter();
      this.changeLocation(newLocation);
    } else {
      this.events.push(new GameErrorEvent(GameError.InvalidPath, ""));
    }
  }

  private triggerGeraldTheft(): void {
    this.geraldKeyTheftDone = true;
    this.removeFromInventory(ItemKey.OrderNote);

    const currentGeraldLoc = this.getLocation(this.geraldLocationKey);
    if (currentGeraldLoc.hasItem(ItemKey.Gerald)) {
      currentGeraldLoc.removeItem(ItemKey.Gerald);
    }

    const geraldTree = this.getLocation(LocationKey.GeraldTree);
    const orderNote = this.getItem(ItemKey.OrderNote);
    orderNote.isShown = true;
    orderNote.currentLocationKey = LocationKey.GeraldTree;
    const gerald = this.getItem(ItemKey.Gerald);
    gerald.currentLocationKey = LocationKey.GeraldTree;
    geraldTree.items.push(gerald);
    geraldTree.items.push(orderNote);
    this.geraldLocationKey = LocationKey.GeraldTree;

    this.events.push(
      new ItemEvent(
        "As you step back under the oaks, something crashes through the cedar at full speed. Gerald — it is definitely Gerald — snatches the folded note right out of your hand with his beak, in a single practiced motion, and is gone north before you finish the sentence you were starting to form. You hear the crunch of gravel. The cabin note is gone.",
      ),
    );
  }

  private readonly geraldDepartureMessages = [
    "Gerald wanders off without explanation. This is simply what Gerald does.",
    "Gerald loses interest in this location and moves on. He does not say goodbye.",
    "Gerald departs at his own pace, in his own direction, on his own schedule.",
  ];

  private readonly geraldArrivalMessages = [
    "Gerald arrives. He surveys the area with the bearing of a regional manager doing a surprise inspection.",
    "Gerald materializes from the cedar, as if he was always coming here and you simply arrived late.",
    "Gerald appears. He regards you with one eye, then the other. He does not explain himself.",
  ];

  private updateGeraldPatrol(): void {
    if (this.geraldKeyTheftDone) return;
    if (this.actionCount === 0) return;
    if (this.actionCount % 4 !== 0) return;
    if (this.actionCount === this.lastGeraldMoveAt) return;
    this.lastGeraldMoveAt = this.actionCount;

    const fromLoc = this.getLocation(this.geraldLocationKey);
    const geraldWasHere = fromLoc === this.currentLocation;

    if (fromLoc.hasItem(ItemKey.Gerald)) {
      fromLoc.removeItem(ItemKey.Gerald);
    }

    this.geraldPatrolIndex =
      (this.geraldPatrolIndex + 1) % this.geraldPatrol.length;
    this.geraldLocationKey = this.geraldPatrol[this.geraldPatrolIndex];
    const toLoc = this.getLocation(this.geraldLocationKey);
    const gerald = this.getItem(ItemKey.Gerald);
    gerald.currentLocationKey = this.geraldLocationKey;
    toLoc.items.push(gerald);

    if (geraldWasHere) {
      const msg =
        this.geraldDepartureMessages[
          this.geraldPatrolIndex % this.geraldDepartureMessages.length
        ];
      this.events.push(new ItemEvent(msg));
    } else if (toLoc === this.currentLocation) {
      const msg =
        this.geraldArrivalMessages[
          this.geraldPatrolIndex % this.geraldArrivalMessages.length
        ];
      this.events.push(new ItemEvent(msg));
    }
  }

  public getLocation(locationKey: LocationKey): Location {
    return this.locations.get(locationKey)!;
  }

  public getItem(itemKey: ItemKey): Item {
    return this.items.get(itemKey)!;
  }

  public availableItems(): Item[] {
    return this.currentLocation.items.concat(this.inventory);
  }

  public isItemAvailable(itemKey: ItemKey): boolean {
    return (
      this.inventoryContains(itemKey) || this.currentLocation.hasItem(itemKey)
    );
  }

  public inventoryContains(itemKey: ItemKey): boolean {
    return this.getInventoryItemByKey(itemKey) !== undefined;
  }

  public removeFromInventory(itemKey: ItemKey): void {
    const item = this.getItem(itemKey);
    this.inventory.splice(this.inventory.indexOf(item), 1);
  }

  public addToInventory(itemKey: ItemKey): void {
    this.inventory.push(this.getItem(itemKey));
  }

  public maxScore(): number {
    const questTotal = Object.values(Constants.Quests).reduce(
      (sum, q) => sum + q.value,
      0,
    );
    let itemTotal = 0;
    for (const item of this.items.values()) {
      itemTotal += item.value;
    }
    return questTotal + itemTotal;
  }

  private getItemByName(itemName: string): Item | undefined {
    for (let itemObject of this.items.values()) {
      const item = itemObject as Item;
      if (item.name === itemName) {
        return item;
      }
    }
    return undefined;
  }

  private getAvailableItemByName(itemName: string): Item | undefined {
    return this.availableItems().find((i) => i.name === itemName);
  }

  private getLocationItemByName(itemName: string): Item | undefined {
    return this.currentLocation.items.find((i) => i.name === itemName);
  }

  private getInventoryItemByName(itemName: string): Item | undefined {
    return this.inventory.find((i) => i.name === itemName);
  }

  private getInventoryItemByKey(itemKey: ItemKey): Item | undefined {
    return this.inventory.find((i) => i.id === itemKey);
  }

  public static hasSave(): boolean {
    return SaveGame.hasSave();
  }

  public save(): void {
    const itemStates: ItemSaveState[] = [];
    for (const [key, item] of this.items) {
      itemStates.push({
        key,
        taken: item.taken,
        isShown: item.isShown,
        currentLocationKey: item.currentLocationKey,
      });
    }
    const gerald = this.getItem(ItemKey.Gerald) as Gerald;
    const blantons = this.getItem(ItemKey.BlantonsBottle) as BlantonsBottle;
    SaveGame.write({
      currentLocationKey: this.currentLocation.id,
      score: this.score,
      actionCount: this.actionCount,
      completedQuests: this.questTracker.getCompletedIds(),
      visitedLocations: Array.from(this.visitedLocations),
      inventory: this.inventory.map((item) => item.id as ItemKey),
      itemStates,
      geraldLocationKey: this.geraldLocationKey,
      geraldKeyTheftDone: this.geraldKeyTheftDone,
      geraldPatrolIndex: this.geraldPatrolIndex,
      lastGeraldMoveAt: this.lastGeraldMoveAt,
      geraldDescriptionIndex: gerald.descriptionIndex,
      blantonsOpened: blantons.opened,
    });
  }

  public load(): void {
    const save = SaveGame.read();
    if (!save) return;

    this.init();

    for (const location of this.locations.values()) {
      location.items.splice(0);
    }

    for (const state of save.itemStates) {
      const item = this.items.get(state.key);
      if (!item) continue;
      item.taken = state.taken;
      item.isShown = state.isShown;
      item.currentLocationKey = state.currentLocationKey;
      if (state.currentLocationKey !== LocationKey._Nowhere) {
        this.locations.get(state.currentLocationKey)?.items.push(item);
      }
    }

    this.inventory.splice(0);
    for (const itemKey of save.inventory) {
      const item = this.items.get(itemKey);
      if (item) this.inventory.push(item);
    }

    this.score = save.score;
    this.actionCount = save.actionCount;
    this.visitedLocations = new Set(save.visitedLocations);
    this.questTracker.restore(save.completedQuests);

    this.geraldLocationKey = save.geraldLocationKey;
    this.geraldKeyTheftDone = save.geraldKeyTheftDone;
    this.geraldPatrolIndex = save.geraldPatrolIndex;
    this.lastGeraldMoveAt = save.lastGeraldMoveAt;
    (this.getItem(ItemKey.Gerald) as Gerald).descriptionIndex = save.geraldDescriptionIndex;
    (this.getItem(ItemKey.BlantonsBottle) as BlantonsBottle).opened = save.blantonsOpened;

    this.restoreDynamicNeighbors();
    this.currentLocation = this.getLocation(save.currentLocationKey);
    this.events = [];
  }

  private restoreDynamicNeighbors(): void {
    if (this.questTracker.isComplete(Constants.Quests.CabinCodeEntered)) {
      const porch = this.getLocation(LocationKey.WhiskeyRoomPorch);
      const whiskeyRoom = this.getLocation(LocationKey.WhiskeyRoom);
      porch.neighbors.set("w" as Direction, whiskeyRoom);
      whiskeyRoom.neighbors.set("e" as Direction, porch);
    }
    if (this.questTracker.isComplete(Constants.Quests.LGGUnlocked)) {
      const lggExterior = this.getLocation(LocationKey.LGGExterior);
      const lggRoom = this.getLocation(LocationKey.LGGRoom);
      lggExterior.neighbors.set("n" as Direction, lggRoom);
      lggRoom.neighbors.set("s" as Direction, lggExterior);
    }
  }
}
