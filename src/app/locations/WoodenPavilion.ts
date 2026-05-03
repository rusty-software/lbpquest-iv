import { Constants } from "../Constants";
import { GameEngine } from "../GameEngine";
import { ItemKey } from "../items/ItemKey";
import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class WoodenPavilion extends BaseLocation {
  public id = LocationKey.WoodenPavilion;
  public title = "Wooden Pavilion";
  public descriptionText =
    "You are inside a standalone open-sided wooden pavilion in the middle of the grove, separate from the Lodge. A picnic table runs the length of it. An iron hook is set into the peak beam. The pavilion has the vague feeling of being a place where someone once gave a speech or a sermon. There are no chairs arranged to face any particular direction, and yet you feel there should be.\n\nThe oak grove is to the west.";

  private useBinoculars(gameEngine: GameEngine): string {
    if (!gameEngine.inventoryContains(ItemKey.Binoculars)) {
      return "You don't have any binoculars. You shade your eyes and squint, which helps very little.";
    }
    if (gameEngine.questTracker.isComplete(Constants.Quests.GeraldSpotted)) {
      return "You scan the north field again. Gerald is either still there or very much not there. The binoculars do not resolve this uncertainty.";
    }
    gameEngine.questTracker.complete(Constants.Quests.GeraldSpotted, gameEngine);
    return "You raise the binoculars and scan the north field. The focus wheel turns until the oaks resolve into detail. And there — at the far edge of the field, motionless against the treeline — Gerald. He is facing directly toward you. He has been there for some time. His posture suggests he has been waiting for this exact moment. He does not look away first. (2 points)";
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map([
    [
      "examine table",
      (_gameEngine) =>
        "A weathered cedar picnic table under the pavilion roof. Someone has carved into the wood over the years — initials, dates, a crude star. Near the corner, in deeper cuts than the rest: a turkey silhouette, recognizable to anyone who has spent time here, with the letters G.T.K. below it. Gerald the Gobbler King. He has always been here. He will outlast the table.",
    ],
    ["use binoculars", (gameEngine: GameEngine) => this.useBinoculars(gameEngine)],
    ["look through binoculars", (gameEngine: GameEngine) => this.useBinoculars(gameEngine)],
  ]);
}
