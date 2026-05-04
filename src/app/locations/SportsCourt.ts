import { Constants } from "../Constants";
import { GameEngine } from "../GameEngine";
import { ItemKey } from "../items/ItemKey";
import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class SportsCourt extends BaseLocation {
  public id = LocationKey.SportsCourt;
  public title = "Sports Court";

  public description(): string {
    const ballPresent = this.items.some(
      (i) => i.id === ItemKey.Pickleball && i.isShown,
    );
    const ballSentence = ballPresent
      ? " One ball sits at the far baseline, where it has apparently always been."
      : "";
    let itemText = "";
    this.items
      .filter((i) => i.isShown && i.id !== ItemKey.Pickleball)
      .forEach((i) => (itemText += `\n\n${i.getLocationText()}`));
    return `You are at the sports court — a full pickleball surface striped in blue, enclosed by black netting and a tall fence. A basketball hoop stands at the far end on a tall pole with its own floodlight, already on though it is not yet necessary. Near the gate entrance hangs a small whiteboard scoreboard that reads GERALD: 3 / HUMANS: 0.${ballSentence} Next to the scoreboard hangs a small brass bell on a cord.\n\nThe pool deck is to the south. The pool equipment shed is to the east.${itemText}`;
  }

  private playPickleball(gameEngine: GameEngine): string {
    if (gameEngine.questTracker.isComplete(Constants.Quests.PickleballPlayed)) {
      return "You already played a set. The court is still here. Gerald is still undefeated on the scoreboard. Some things do not change.";
    }
    if (!gameEngine.inventoryContains(ItemKey.PickleballPaddle)) {
      return "You'd need a paddle. One might be around here somewhere.";
    }
    if (!gameEngine.inventoryContains(ItemKey.Pickleball)) {
      return "You have the paddle but no ball. Check the equipment shed.";
    }
    gameEngine.questTracker.complete(
      Constants.Quests.PickleballPlayed,
      gameEngine,
    );
    return "You serve to yourself, which is not regulation play but is what is available. The court has good bounce. The net height is correct. You play a set against the back fence, which is a patient opponent. You win, in the technical sense. The scoreboard still reads GERALD: 3 / HUMANS: 0. You do not update it.";
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map(
    [
      [
        "ring bell",
        (_gameEngine) =>
          "You ring the bell. A clear, carrying tone crosses the empty court. From somewhere to the north, distantly, there is a single gobble. Then silence. The scoreboard still reads GERALD: 3 / HUMANS: 0. It will probably always read this.",
      ],
      [
        "play pickleball",
        (gameEngine: GameEngine) => this.playPickleball(gameEngine),
      ],
    ],
  );
}
