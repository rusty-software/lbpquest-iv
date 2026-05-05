import { Constants } from "../Constants";
import { GameEngine } from "../GameEngine";
import { ItemKey } from "../items/ItemKey";
import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export function lightFire(gameEngine: GameEngine): string {
  if (gameEngine.questTracker.isComplete(Constants.Quests.FireLit)) {
    return "The fire is already going. You feed it a piece of cedar. It accepts.";
  }
  if (!gameEngine.inventoryContains(ItemKey.Matches)) {
    return "You could light it with some matches. You don't have any.";
  }
  gameEngine.questTracker.complete(Constants.Quests.FireLit, gameEngine);
  return "You strike a long match against the box and touch it to the paper and cedar. The fire catches slowly at first, then with conviction. The pit glows. The clearing changes completely.";
}

export class FirePit extends BaseLocation {
  public id = LocationKey.FirePit;
  public title = "Fire Pit";

  public description(): string {
    const fireLit = this.gameEngine?.questTracker.isComplete(
      Constants.Quests.FireLit,
    );
    const satByFire = this.gameEngine?.questTracker.isComplete(
      Constants.Quests.SatByFire,
    );

    const fireDesc = fireLit
      ? "The fire is going now — cedar popping in the metal pit, throwing good orange light into the clearing. The chairs are warm on the side facing the flames."
      : "The metal fire pit in the center sits cold, with a stack of split cedar beside it that someone arranged with care.";

    const chairDesc = satByFire
      ? "You've already settled into one of the Adirondack chairs tonight."
      : "Four camp chairs are arranged in a ring — two folding nylon, two Adirondack.";

    const msgPart = fireLit
      ? ""
      : "\n\nThis is probably where your friends were supposed to be. They are not here. On the arm of the nearest folding chair, in black marker on the webbing: GONE TO WHISKEY CABIN — FOLLOW LIGHTS.";

    const topoPresent = this.items.some(
      (i) => i.id === ItemKey.TopoChicoBottle && i.isShown,
    );
    const topoSentence = topoPresent
      ? " An empty Topo Chico bottle stands on one of the Adirondack armrests. Someone was here recently."
      : "";
    let itemText = "";
    this.items
      .filter((i) => i.isShown && i.id !== ItemKey.TopoChicoBottle)
      .forEach((i) => (itemText += `\n\n${i.getLocationText()}`));

    return `You arrive at a wide ring of tamped earth in a clearing. ${fireDesc} ${chairDesc} The oaks are dense enough here that this spot feels genuinely separate from the Lodge and the pool, its own place with its own logic.${topoSentence}${msgPart}\n\nThe pool deck is to the north. The south meadow is to the northwest. The cedar brake is to the south.${itemText}`;
  }

  private sitByFire(gameEngine: GameEngine): string {
    if (!gameEngine.questTracker.isComplete(Constants.Quests.FireLit)) {
      return "The fire pit is cold. You sit in a chair anyway, which is fine, but it is not the same thing.";
    }
    if (gameEngine.questTracker.isComplete(Constants.Quests.SatByFire)) {
      return "You are already doing this. You are sitting by the fire. You are fine.";
    }
    gameEngine.questTracker.complete(Constants.Quests.SatByFire, gameEngine);
    return "You pull one of the Adirondack chairs a little closer and sit down. The fire is the right size — big enough to matter, small enough to avoid first degree burns. You stay for a while. This is what you came for.";
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map(
    [
      ["light fire", (gameEngine: GameEngine) => lightFire(gameEngine)],
      ["start fire", (gameEngine: GameEngine) => lightFire(gameEngine)],
      ["use matches", (gameEngine: GameEngine) => lightFire(gameEngine)],
      ["sit in chair", (gameEngine: GameEngine) => this.sitByFire(gameEngine)],
      ["sit by fire", (gameEngine: GameEngine) => this.sitByFire(gameEngine)],
      ["sit down", (gameEngine: GameEngine) => this.sitByFire(gameEngine)],
      ["sit", (gameEngine: GameEngine) => this.sitByFire(gameEngine)],
    ],
  );
}
