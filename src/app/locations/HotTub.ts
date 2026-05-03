import { Constants } from "../Constants";
import { GameEngine } from "../GameEngine";
import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class HotTub extends BaseLocation {
  public id = LocationKey.HotTub;
  public title = "Hot Tub";
  public descriptionText =
    "You climb up to the elevated circular hot tub — its own sovereign domain. The jets are running, the water churning, the lights a steady purple. It smells of chlorine and cedar and the faint ghost of someone's coconut sunscreen. From up here on the raised deck, looking back toward the Lodge, you can see the rocking chairs on the back porch clearly through the tree canopy. There is already a rubber duck in the tub. This one is not wearing a hat. It has less charisma than the one in the master bathroom, but it has made peace with this.\n\nThe pool deck is to the west.";

  private soak(gameEngine: GameEngine): string {
    if (gameEngine.questTracker.isComplete(Constants.Quests.HotTubSoaked)) {
      return "You already soaked. The jets are still running. The rubber duck has not moved.";
    }
    gameEngine.questTracker.complete(Constants.Quests.HotTubSoaked, gameEngine);
    return "You get in. The jets are very powerful and very immediate. The water is exactly 104 degrees, which is the correct temperature for a hot tub at a ranch in the Texas Hill Country at this hour. You soak. The rubber duck observes. You stay until you have sufficiently soaked, which takes a while. (2 points)";
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map([
    ["get in", (gameEngine: GameEngine) => this.soak(gameEngine)],
    ["get into hot tub", (gameEngine: GameEngine) => this.soak(gameEngine)],
    ["soak", (gameEngine: GameEngine) => this.soak(gameEngine)],
  ]);
}
