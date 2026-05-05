import { GameEngine } from "../GameEngine";
import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class WoodenPavilion extends BaseLocation {
  public id = LocationKey.WoodenPavilion;
  public title = "Wooden Pavilion";
  public descriptionText =
    "You are inside a standalone open-sided wooden pavilion in the middle of the grove, separate from the Lodge. A picnic table runs the length of it. An iron hook is set into the peak beam. The pavilion has the vague feeling of being a place where someone once gave a speech or a sermon. There are no chairs arranged to face any particular direction, and yet you feel there should be.\n\nThe oak grove is to the west.";

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map(
    [
      [
        "examine table",
        (_gameEngine) =>
          "A weathered cedar picnic table under the pavilion roof. Someone has carved into the wood over the years — initials, dates, a crude star. Near the corner, in deeper cuts than the rest: a turkey silhouette, recognizable to anyone who has spent time here, with the letters G.T.G.K. below it. Gerald the Gobbler King. He has always been here. He will likey outlast the table.",
      ],
    ],
  );
}
