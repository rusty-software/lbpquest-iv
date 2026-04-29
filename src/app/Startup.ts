import { Item } from "./Item";
import {
  Batteries,
  Binoculars,
  BlantonsBottle,
  BrokenJigger,
  CactusNightlight,
  ChildTent,
  CowboyRubberDuck,
  Crackers,
  EmptyBeerCan,
  Flashlight,
  Gerald,
  GeraldNote,
  GlowStick,
  ItemKey,
  LGGKey,
  LoneAntler,
  LoneStick,
  OrderNote,
  PickleballPaddle,
  PlainRubberDuck,
  PoolSchedule,
  PropaneLantern,
  ScoreboardSign,
  StuffedArmadillo,
  TopoChicoBottle,
  WesternNovel,
  WhiteboardNote,
} from "./items";
import { Location } from "./Location";
import {
  BackPorch,
  BedroomThree,
  BunkRoom,
  CedarBrake,
  DeerBlind,
  EntranceRoad,
  FirePit,
  FrontPorch,
  GreatRoom,
  GeraldTree,
  Hallway,
  HotTub,
  Kitchen,
  LGGExterior,
  LGGRoom,
  LocationKey,
  MasterBathroom,
  MasterBedroom,
  Mudroom,
  NorthField,
  OakGroveNorth,
  OakGroveSouth,
  ParkingArea,
  PoolDeck,
  PoolEquipmentShed,
  RanchEntranceSign,
  SharedBathroom,
  SouthMeadow,
  SportsCourt,
  VodkaRoom,
  WhiskeyRoom,
  WhiskeyRoomPorch,
  WhiskeyRoomTrail,
  WoodenPavilion,
} from "./locations";
import { NeighborMap } from "./NeighborMap";
import { Direction } from "./Direction";

export class Startup {
  public static readonly items: Map<ItemKey, Item> = new Map();
  public static readonly locations: Map<LocationKey, Location> = new Map();

  private static getItem(itemKey: ItemKey): Item {
    return Startup.items.get(itemKey)!;
  }

  private static getLocation(locationKey: LocationKey): Location {
    return Startup.locations.get(locationKey)!;
  }

  public static init() {
    Startup.instantiateLocations();
    Startup.instantiateItems();
    Startup.arrange();
  }

  private static instantiateLocations() {
    Startup.locations.set(LocationKey.EntranceRoad, new EntranceRoad());
    Startup.locations.set(LocationKey.RanchEntranceSign, new RanchEntranceSign());
    Startup.locations.set(LocationKey.NorthField, new NorthField());
    Startup.locations.set(LocationKey.GeraldTree, new GeraldTree());
    Startup.locations.set(LocationKey.ParkingArea, new ParkingArea());
    Startup.locations.set(LocationKey.FrontPorch, new FrontPorch());
    Startup.locations.set(LocationKey.GreatRoom, new GreatRoom());
    Startup.locations.set(LocationKey.Kitchen, new Kitchen());
    Startup.locations.set(LocationKey.Mudroom, new Mudroom());
    Startup.locations.set(LocationKey.Hallway, new Hallway());
    Startup.locations.set(LocationKey.BunkRoom, new BunkRoom());
    Startup.locations.set(LocationKey.MasterBedroom, new MasterBedroom());
    Startup.locations.set(LocationKey.MasterBathroom, new MasterBathroom());
    Startup.locations.set(LocationKey.BedroomThree, new BedroomThree());
    Startup.locations.set(LocationKey.SharedBathroom, new SharedBathroom());
    Startup.locations.set(LocationKey.BackPorch, new BackPorch());
    Startup.locations.set(LocationKey.OakGroveNorth, new OakGroveNorth());
    Startup.locations.set(LocationKey.OakGroveSouth, new OakGroveSouth());
    Startup.locations.set(LocationKey.WoodenPavilion, new WoodenPavilion());
    Startup.locations.set(LocationKey.SouthMeadow, new SouthMeadow());
    Startup.locations.set(LocationKey.PoolDeck, new PoolDeck());
    Startup.locations.set(LocationKey.HotTub, new HotTub());
    Startup.locations.set(LocationKey.SportsCourt, new SportsCourt());
    Startup.locations.set(LocationKey.PoolEquipmentShed, new PoolEquipmentShed());
    Startup.locations.set(LocationKey.FirePit, new FirePit());
    Startup.locations.set(LocationKey.CedarBrake, new CedarBrake());
    Startup.locations.set(LocationKey.DeerBlind, new DeerBlind());
    Startup.locations.set(LocationKey.WhiskeyRoomTrail, new WhiskeyRoomTrail());
    Startup.locations.set(LocationKey.WhiskeyRoomPorch, new WhiskeyRoomPorch());
    Startup.locations.set(LocationKey.WhiskeyRoom, new WhiskeyRoom());
    Startup.locations.set(LocationKey.LGGExterior, new LGGExterior());
    Startup.locations.set(LocationKey.LGGRoom, new LGGRoom());
    Startup.locations.set(LocationKey.VodkaRoom, new VodkaRoom());
  }

  private static instantiateItems() {
    Startup.items.set(ItemKey.Flashlight, new Flashlight());
    Startup.items.set(ItemKey.Batteries, new Batteries());
    Startup.items.set(ItemKey.LGGKey, new LGGKey());
    Startup.items.set(ItemKey.Crackers, new Crackers());
    Startup.items.set(ItemKey.BrokenJigger, new BrokenJigger());
    Startup.items.set(ItemKey.ChildTent, new ChildTent());
    Startup.items.set(ItemKey.GlowStick, new GlowStick());
    Startup.items.set(ItemKey.GeraldNote, new GeraldNote());
    Startup.items.set(ItemKey.StuffedArmadillo, new StuffedArmadillo());
    Startup.items.set(ItemKey.LoneStick, new LoneStick());
    Startup.items.set(ItemKey.CactusNightlight, new CactusNightlight());
    Startup.items.set(ItemKey.WesternNovel, new WesternNovel());
    Startup.items.set(ItemKey.CowboyRubberDuck, new CowboyRubberDuck());
    Startup.items.set(ItemKey.PlainRubberDuck, new PlainRubberDuck());
    Startup.items.set(ItemKey.PoolSchedule, new PoolSchedule());
    Startup.items.set(ItemKey.ScoreboardSign, new ScoreboardSign());
    Startup.items.set(ItemKey.WhiteboardNote, new WhiteboardNote());
    Startup.items.set(ItemKey.EmptyBeerCan, new EmptyBeerCan());
    Startup.items.set(ItemKey.TopoChicoBottle, new TopoChicoBottle());
    Startup.items.set(ItemKey.BlantonsBottle, new BlantonsBottle());
    Startup.items.set(ItemKey.PropaneLantern, new PropaneLantern());
    Startup.items.set(ItemKey.LoneAntler, new LoneAntler());
    Startup.items.set(ItemKey.PickleballPaddle, new PickleballPaddle());
    Startup.items.set(ItemKey.Binoculars, new Binoculars());
    Startup.items.set(ItemKey.Gerald, new Gerald());
    Startup.items.set(ItemKey.OrderNote, new OrderNote());
  }

  private static arrange() {
    Startup.arrangeEntranceRoad();
    Startup.arrangeRanchEntranceSign();
    Startup.arrangeNorthField();
    Startup.arrangeGeraldTree();
    Startup.arrangeParkingArea();
    Startup.arrangeFrontPorch();
    Startup.arrangeGreatRoom();
    Startup.arrangeKitchen();
    Startup.arrangeMudroom();
    Startup.arrangeHallway();
    Startup.arrangeBunkRoom();
    Startup.arrangeMasterBedroom();
    Startup.arrangeMasterBathroom();
    Startup.arrangeBedroomThree();
    Startup.arrangeSharedBathroom();
    Startup.arrangeBackPorch();
    Startup.arrangeOakGroveNorth();
    Startup.arrangeOakGroveSouth();
    Startup.arrangeWoodenPavilion();
    Startup.arrangeSouthMeadow();
    Startup.arrangePoolDeck();
    Startup.arrangeHotTub();
    Startup.arrangeSportsCourt();
    Startup.arrangePoolEquipmentShed();
    Startup.arrangeFirePit();
    Startup.arrangeCedarBrake();
    Startup.arrangeDeerBlind();
    Startup.arrangeWhiskeyRoomTrail();
    Startup.arrangeWhiskeyRoomPorch();
    Startup.arrangeWhiskeyRoom();
    Startup.arrangeLGGExterior();
    Startup.arrangeLGGRoom();
    Startup.arrangeVodkaRoom();
  }

  private static arrangeEntranceRoad() {
    const loc = Startup.getLocation(LocationKey.EntranceRoad);
    loc.neighbors = new NeighborMap([
      ["n" as Direction, Startup.getLocation(LocationKey.RanchEntranceSign)],
    ]);
    loc.items = [Startup.getItem(ItemKey.Gerald)];
  }

  private static arrangeRanchEntranceSign() {
    const loc = Startup.getLocation(LocationKey.RanchEntranceSign);
    loc.neighbors = new NeighborMap([
      ["s" as Direction, Startup.getLocation(LocationKey.EntranceRoad)],
      ["n" as Direction, Startup.getLocation(LocationKey.NorthField)],
    ]);
    loc.customVerbs = new Map([
      [
        "examine sign",
        (_gameEngine) =>
          "OAKRIDGE RANCH. Black powder-coated steel. A silhouette of a black-tailed stag leaping left, LED-backlit. Beneath the name, smaller text: Est. whenever the cedar got serious. Someone has added a handwritten sticky note to the back of the sign post, visible only from the field side: 'GERALD KNOWS THE CODE. DO NOT ASK GERALD.'",
      ],
    ]);
  }

  private static arrangeNorthField() {
    const loc = Startup.getLocation(LocationKey.NorthField);
    loc.neighbors = new NeighborMap([
      ["s" as Direction, Startup.getLocation(LocationKey.RanchEntranceSign)],
      ["e" as Direction, Startup.getLocation(LocationKey.GeraldTree)],
      ["n" as Direction, Startup.getLocation(LocationKey.ParkingArea)],
    ]);
    loc.customVerbs = new Map([
      [
        "examine grasshoppers",
        (_gameEngine) =>
          "The grasshoppers are enormous and indifferent. One lands on your shoe, regards you with a compound eye, and departs without comment. You feel evaluated.",
      ],
    ]);
  }

  private static arrangeGeraldTree() {
    const loc = Startup.getLocation(LocationKey.GeraldTree);
    loc.neighbors = new NeighborMap([
      ["w" as Direction, Startup.getLocation(LocationKey.NorthField)],
      ["n" as Direction, Startup.getLocation(LocationKey.ParkingArea)],
    ]);
    loc.items = [
      Startup.getItem(ItemKey.EmptyBeerCan),
      Startup.getItem(ItemKey.LGGKey),
    ];
    loc.customVerbs = new Map([
      [
        "examine tree",
        (_gameEngine) =>
          "The oak is ancient — the bark deeply furrowed, the roots surfacing and diving like something that has long since stopped asking permission. The claw marks are deliberate: seven scored lines on the east face, three on the south. Gerald has been keeping track of something. You are not sure you want to know what.",
      ],
    ]);
  }

  private static arrangeParkingArea() {
    const loc = Startup.getLocation(LocationKey.ParkingArea);
    loc.neighbors = new NeighborMap([
      ["s" as Direction, Startup.getLocation(LocationKey.NorthField)],
      ["se" as Direction, Startup.getLocation(LocationKey.GeraldTree)],
      ["n" as Direction, Startup.getLocation(LocationKey.FrontPorch)],
    ]);
    loc.customVerbs = new Map([
      [
        "examine camera",
        (_gameEngine) =>
          "A small security camera above the Lodge entrance, pointing down at the parking area. The red indicator light blinks steadily. Somewhere, a recording of Gerald doing something inexplicable is accumulating on a hard drive. There is nothing you can do about this.",
      ],
    ]);
  }

  private static arrangeFrontPorch() {
    const loc = Startup.getLocation(LocationKey.FrontPorch);
    loc.neighbors = new NeighborMap([
      ["s" as Direction, Startup.getLocation(LocationKey.ParkingArea)],
      ["e" as Direction, Startup.getLocation(LocationKey.GreatRoom)],
    ]);
    loc.customVerbs = new Map([
      [
        "sit in rocking chair",
        (_gameEngine) =>
          "You sit in one of the rocking chairs. It creaks agreeably. From here you can see the parking area, Gerald's Tree in the distance, and a sliver of the north field. Somewhere out there, Gerald is operating on his own schedule. You rock once. You get up. The chair continues to rock slightly after you leave.",
      ],
    ]);
  }

  private static arrangeGreatRoom() {
    const loc = Startup.getLocation(LocationKey.GreatRoom);
    loc.neighbors = new NeighborMap([
      ["w" as Direction, Startup.getLocation(LocationKey.FrontPorch)],
      ["n" as Direction, Startup.getLocation(LocationKey.Kitchen)],
      ["e" as Direction, Startup.getLocation(LocationKey.Hallway)],
      ["s" as Direction, Startup.getLocation(LocationKey.BackPorch)],
    ]);
  }

  private static arrangeKitchen() {
    const loc = Startup.getLocation(LocationKey.Kitchen);
    loc.neighbors = new NeighborMap([
      ["s" as Direction, Startup.getLocation(LocationKey.GreatRoom)],
      ["n" as Direction, Startup.getLocation(LocationKey.Mudroom)],
    ]);
    loc.items = [
      Startup.getItem(ItemKey.Flashlight),
      Startup.getItem(ItemKey.Crackers),
      Startup.getItem(ItemKey.WhiteboardNote),
    ];
  }

  private static arrangeMudroom() {
    const loc = Startup.getLocation(LocationKey.Mudroom);
    loc.neighbors = new NeighborMap([
      ["s" as Direction, Startup.getLocation(LocationKey.Kitchen)],
      ["n" as Direction, Startup.getLocation(LocationKey.OakGroveNorth)],
    ]);
    loc.customVerbs = new Map([
      [
        "examine coats",
        (_gameEngine) =>
          "A row of hooks, most holding fleece vests and rain jackets belonging to no one in particular. In the pocket of a canvas barn coat: a golf tee, a receipt from a gas station in Fredericksburg, and a note that reads 'DO NOT LEAVE GATE OPEN — G.' Gerald has apparently left notes in multiple locations on this property.",
      ],
      [
        "examine tallboy",
        (_gameEngine) =>
          "Empty. Gerald got to it first — drank the whole thing somewhere and left the can here as a trophy, apparently. Nothing worth taking.",
      ],
    ]);
  }

  private static arrangeHallway() {
    const loc = Startup.getLocation(LocationKey.Hallway);
    loc.neighbors = new NeighborMap([
      ["w" as Direction, Startup.getLocation(LocationKey.GreatRoom)],
      ["n" as Direction, Startup.getLocation(LocationKey.BunkRoom)],
      ["e" as Direction, Startup.getLocation(LocationKey.MasterBedroom)],
      ["s" as Direction, Startup.getLocation(LocationKey.BedroomThree)],
      ["se" as Direction, Startup.getLocation(LocationKey.SharedBathroom)],
    ]);
    loc.items = [Startup.getItem(ItemKey.LoneStick)];
  }

  private static arrangeBunkRoom() {
    const loc = Startup.getLocation(LocationKey.BunkRoom);
    loc.neighbors = new NeighborMap([
      ["s" as Direction, Startup.getLocation(LocationKey.Hallway)],
    ]);
    loc.items = [Startup.getItem(ItemKey.CactusNightlight)];
    loc.customVerbs = new Map([
      [
        "examine bunks",
        (_gameEngine) =>
          "Three sets of bunk beds, each made with the same geometric precision. Under the pillow of the lowest bunk: a hand-drawn map of the ranch property on graph paper. Labeled in careful pencil. One location is circled twice with an arrow pointing to it: the deer blind, labeled STAND 1.",
      ],
    ]);
  }

  private static arrangeMasterBedroom() {
    const loc = Startup.getLocation(LocationKey.MasterBedroom);
    loc.neighbors = new NeighborMap([
      ["w" as Direction, Startup.getLocation(LocationKey.Hallway)],
      ["e" as Direction, Startup.getLocation(LocationKey.MasterBathroom)],
    ]);
    loc.items = [Startup.getItem(ItemKey.ChildTent)];
  }

  private static arrangeMasterBathroom() {
    const loc = Startup.getLocation(LocationKey.MasterBathroom);
    loc.neighbors = new NeighborMap([
      ["w" as Direction, Startup.getLocation(LocationKey.MasterBedroom)],
    ]);
    loc.items = [Startup.getItem(ItemKey.CowboyRubberDuck)];
  }

  private static arrangeBedroomThree() {
    const loc = Startup.getLocation(LocationKey.BedroomThree);
    loc.neighbors = new NeighborMap([
      ["n" as Direction, Startup.getLocation(LocationKey.Hallway)],
    ]);
    loc.customVerbs = new Map([
      [
        "examine window",
        (_gameEngine) =>
          "The window faces the oak grove. Through the leaves you can see the string lights strung between trunks, already lit against the darkening sky. They trace a path toward something to the west. You cannot quite see what.",
      ],
    ]);
  }

  private static arrangeSharedBathroom() {
    const loc = Startup.getLocation(LocationKey.SharedBathroom);
    loc.neighbors = new NeighborMap([
      ["w" as Direction, Startup.getLocation(LocationKey.Hallway)],
    ]);
    loc.items = [Startup.getItem(ItemKey.WesternNovel)];
  }

  private static arrangeBackPorch() {
    const loc = Startup.getLocation(LocationKey.BackPorch);
    loc.neighbors = new NeighborMap([
      ["n" as Direction, Startup.getLocation(LocationKey.GreatRoom)],
      ["s" as Direction, Startup.getLocation(LocationKey.OakGroveNorth)],
    ]);
    loc.items = [
      Startup.getItem(ItemKey.BrokenJigger),
      Startup.getItem(ItemKey.BlantonsBottle),
    ];
    loc.customVerbs = new Map([
      [
        "examine bar",
        (_gameEngine) =>
          "The oak bar is rough-cut and well-used. Pinned to the post behind it: a handwritten cocktail menu on cardstock, slightly warped from humidity.\n\nTHE BLIND BUCK — 1 oz bourbon, honey, splash of bitters\nTHE COURT JESTER — 3 oz ranch water, lime, never enough ice\nTHE SHED SPECIAL — 7-year rye, neat, no argument\nTHE TUB FLOAT — 2 oz coconut rum, pineapple, served in whatever's clean\n\nThe prices are crossed out. Everything here is on the ranch.",
      ],
    ]);
  }

  private static arrangeOakGroveNorth() {
    const loc = Startup.getLocation(LocationKey.OakGroveNorth);
    loc.neighbors = new NeighborMap([
      ["n" as Direction, Startup.getLocation(LocationKey.BackPorch)],
      ["ne" as Direction, Startup.getLocation(LocationKey.Mudroom)],
      ["s" as Direction, Startup.getLocation(LocationKey.OakGroveSouth)],
      ["e" as Direction, Startup.getLocation(LocationKey.WoodenPavilion)],
      ["w" as Direction, Startup.getLocation(LocationKey.WhiskeyRoomTrail)],
      ["nw" as Direction, Startup.getLocation(LocationKey.LGGExterior)],
    ]);
    loc.customVerbs = new Map([
      [
        "examine does",
        (_gameEngine) =>
          "The two does stand their ground as you approach. One flicks an ear. The other blinks slowly. They have clearly decided you are not a threat and also not particularly interesting. You stand there for a moment. They go back to eating. That's it. That's the interaction.",
      ],
    ]);
  }

  private static arrangeOakGroveSouth() {
    const loc = Startup.getLocation(LocationKey.OakGroveSouth);
    loc.neighbors = new NeighborMap([
      ["n" as Direction, Startup.getLocation(LocationKey.OakGroveNorth)],
      ["e" as Direction, Startup.getLocation(LocationKey.PoolDeck)],
      ["s" as Direction, Startup.getLocation(LocationKey.SouthMeadow)],
    ]);
    loc.customVerbs = new Map([
      [
        "examine string lights",
        (_gameEngine) =>
          "Warm white bulbs strung between oak trunks, running northwest and west through the trees. They disappear around a bend, but you can trace the line — they lead somewhere. Probably the outbuildings. Follow them and you'll end up somewhere specific.",
      ],
    ]);
  }

  private static arrangeWoodenPavilion() {
    const loc = Startup.getLocation(LocationKey.WoodenPavilion);
    loc.neighbors = new NeighborMap([
      ["w" as Direction, Startup.getLocation(LocationKey.OakGroveNorth)],
    ]);
    loc.items = [Startup.getItem(ItemKey.PropaneLantern)];
    loc.customVerbs = new Map([
      [
        "examine table",
        (_gameEngine) =>
          "A weathered cedar picnic table under the pavilion roof. Someone has carved into the wood over the years — initials, dates, a crude star. Near the corner, in deeper cuts than the rest: a turkey silhouette, recognizable to anyone who has spent time here, with the letters G.T.K. below it. Gerald the Gobbler King. He has always been here. He will outlast the table.",
      ],
    ]);
  }

  private static arrangeSouthMeadow() {
    const loc = Startup.getLocation(LocationKey.SouthMeadow);
    loc.neighbors = new NeighborMap([
      ["n" as Direction, Startup.getLocation(LocationKey.OakGroveSouth)],
      ["se" as Direction, Startup.getLocation(LocationKey.FirePit)],
      ["s" as Direction, Startup.getLocation(LocationKey.CedarBrake)],
      ["e" as Direction, Startup.getLocation(LocationKey.PoolDeck)],
    ]);
    loc.customVerbs = new Map([
      [
        "examine deer",
        (_gameEngine) =>
          "A doe steps out of the treeline, regards you for a long moment with the calm of something that has never had a mortgage, and then steps back into the cedar. You feel briefly envied.",
      ],
    ]);
  }

  private static arrangePoolDeck() {
    const loc = Startup.getLocation(LocationKey.PoolDeck);
    loc.neighbors = new NeighborMap([
      ["w" as Direction, Startup.getLocation(LocationKey.OakGroveSouth)],
      ["e" as Direction, Startup.getLocation(LocationKey.HotTub)],
      ["n" as Direction, Startup.getLocation(LocationKey.SportsCourt)],
      ["s" as Direction, Startup.getLocation(LocationKey.FirePit)],
      ["sw" as Direction, Startup.getLocation(LocationKey.SouthMeadow)],
    ]);
    loc.customVerbs = new Map([
      [
        "examine pool",
        (_gameEngine) =>
          "The pool shifts between blue and green in the LED lighting cycle. The water is exceptionally clear. Near the far drain, something glints on the bottom. You peer closer. It's a quarter. You do not go in after it.",
      ],
    ]);
  }

  private static arrangeHotTub() {
    const loc = Startup.getLocation(LocationKey.HotTub);
    loc.neighbors = new NeighborMap([
      ["w" as Direction, Startup.getLocation(LocationKey.PoolDeck)],
    ]);
    loc.items = [Startup.getItem(ItemKey.PlainRubberDuck)];
  }

  private static arrangeSportsCourt() {
    const loc = Startup.getLocation(LocationKey.SportsCourt);
    loc.neighbors = new NeighborMap([
      ["s" as Direction, Startup.getLocation(LocationKey.PoolDeck)],
      ["e" as Direction, Startup.getLocation(LocationKey.PoolEquipmentShed)],
    ]);
    loc.items = [
      Startup.getItem(ItemKey.ScoreboardSign),
      Startup.getItem(ItemKey.PickleballPaddle),
    ];
    loc.customVerbs = new Map([
      [
        "ring bell",
        (_gameEngine) =>
          "You ring the bell. A clear, carrying tone crosses the empty court. From somewhere to the north, distantly, there is a single gobble. Then silence. The scoreboard still reads GERALD: 3 / HUMANS: 0. It will probably always read this.",
      ],
    ]);
  }

  private static arrangePoolEquipmentShed() {
    const loc = Startup.getLocation(LocationKey.PoolEquipmentShed);
    loc.neighbors = new NeighborMap([
      ["w" as Direction, Startup.getLocation(LocationKey.SportsCourt)],
    ]);
    loc.items = [Startup.getItem(ItemKey.PoolSchedule)];
  }

  private static arrangeFirePit() {
    const loc = Startup.getLocation(LocationKey.FirePit);
    loc.neighbors = new NeighborMap([
      ["n" as Direction, Startup.getLocation(LocationKey.PoolDeck)],
      ["nw" as Direction, Startup.getLocation(LocationKey.SouthMeadow)],
      ["s" as Direction, Startup.getLocation(LocationKey.CedarBrake)],
    ]);
    loc.items = [Startup.getItem(ItemKey.TopoChicoBottle)];
  }

  private static arrangeCedarBrake() {
    const loc = Startup.getLocation(LocationKey.CedarBrake);
    loc.neighbors = new NeighborMap([
      ["n" as Direction, Startup.getLocation(LocationKey.FirePit)],
      ["s" as Direction, Startup.getLocation(LocationKey.DeerBlind)],
    ]);
    loc.customVerbs = new Map([
      [
        "examine trees",
        (gameEngine) =>
          gameEngine.flashlightActive
            ? "Your flashlight sweeps across the cedar trunks. The trees grow in close here, old and twisted. On one trunk near the center, scratched at shoulder height: GOT U. Two letters. Gerald's work, or just bark damage from something passing through. You choose not to decide."
            : "You can't see much in the dark. The cedar presses close. Something moves in the branches. It is probably just wind.",
      ],
    ]);
  }

  private static arrangeDeerBlind() {
    const loc = Startup.getLocation(LocationKey.DeerBlind);
    loc.neighbors = new NeighborMap([
      ["n" as Direction, Startup.getLocation(LocationKey.CedarBrake)],
    ]);
    loc.items = [Startup.getItem(ItemKey.Binoculars)];
  }

  private static arrangeWhiskeyRoomTrail() {
    const loc = Startup.getLocation(LocationKey.WhiskeyRoomTrail);
    loc.neighbors = new NeighborMap([
      ["e" as Direction, Startup.getLocation(LocationKey.OakGroveNorth)],
      ["w" as Direction, Startup.getLocation(LocationKey.WhiskeyRoomPorch)],
    ]);
  }

  private static arrangeWhiskeyRoomPorch() {
    const loc = Startup.getLocation(LocationKey.WhiskeyRoomPorch);
    loc.neighbors = new NeighborMap([
      ["e" as Direction, Startup.getLocation(LocationKey.WhiskeyRoomTrail)],
      // "w" to WhiskeyRoom is added at runtime when the correct code is entered
    ]);
    loc.items = [Startup.getItem(ItemKey.LoneAntler)];
  }

  private static arrangeWhiskeyRoom() {
    const loc = Startup.getLocation(LocationKey.WhiskeyRoom);
    loc.neighbors = new NeighborMap([
      // "e" back to porch is added at runtime when the correct code is entered
    ]);
    loc.items = [];
  }

  private static arrangeLGGExterior() {
    const loc = Startup.getLocation(LocationKey.LGGExterior);
    loc.neighbors = new NeighborMap([
      ["se" as Direction, Startup.getLocation(LocationKey.OakGroveNorth)],
      // LGGRoom is unlocked at runtime by using the LGGKey here
    ]);
    // LGGKey is hidden at Gerald's Tree — examine the beer can to find it
  }

  private static arrangeLGGRoom() {
    const loc = Startup.getLocation(LocationKey.LGGRoom);
    loc.neighbors = new NeighborMap([
      // s back to LGGExterior is set when the door is unlocked
      ["n" as Direction, Startup.getLocation(LocationKey.VodkaRoom)],
    ]);
  }

  private static arrangeVodkaRoom() {
    const loc = Startup.getLocation(LocationKey.VodkaRoom);
    loc.neighbors = new NeighborMap([
      ["s" as Direction, Startup.getLocation(LocationKey.LGGRoom)],
    ]);
    loc.items = [Startup.getItem(ItemKey.OrderNote)];
  }
}
