import { Constants } from "../Constants";
import { GameEngine } from "../GameEngine";
import { ItemKey } from "../items/ItemKey";
import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class HotTub extends BaseLocation {
  public id = LocationKey.HotTub;
  public title = "Hot Tub";

  public description(): string {
    const duckPresent = this.items.some(
      (i) => i.id === ItemKey.PlainRubberDuck && i.isShown,
    );
    const duckSentence = duckPresent
      ? " There is a rubber duck in the tub. This one is not wearing a hat. It has less charisma than the one in the master bathroom, but it has made peace with this."
      : "";
    return (
      `You climb up to the elevated circular hot tub — its own sovereign domain. The jets are running, the water churning, the lights a steady purple. It smells of chlorine and cedar and the faint ghost of someone's coconut sunscreen. From up here on the raised deck, looking back toward the Lodge, you can see the rocking chairs on the back porch clearly through the tree canopy.${duckSentence}\n\nThe pool deck is to the west.` +
      this.appendItems()
    );
  }

  private soak(gameEngine: GameEngine): string {
    if (gameEngine.questTracker.isComplete(Constants.Quests.HotTubSoaked)) {
      return "You already soaked. The jets are still running.";
    }
    gameEngine.questTracker.complete(Constants.Quests.HotTubSoaked, gameEngine);
    const duckPresent = this.items.some(
      (i) => i.id === ItemKey.PlainRubberDuck && i.isShown,
    );
    const duckLine = duckPresent ? " The rubber duck observes." : "";
    return `You get in. The jets are very powerful and very immediate. The water is exactly 104 degrees, which is the correct temperature for a hot tub at a ranch in the Texas Hill Country at this hour. You soak.${duckLine} You stay until you have sufficiently soaked, which takes a while.`;
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map(
    [
      ["get in", (gameEngine: GameEngine) => this.soak(gameEngine)],
      ["get in hot tub", (gameEngine: GameEngine) => this.soak(gameEngine)],
      ["get into hot tub", (gameEngine: GameEngine) => this.soak(gameEngine)],
      ["soak", (gameEngine: GameEngine) => this.soak(gameEngine)],
    ],
  );
}
