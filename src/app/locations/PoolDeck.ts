import { Constants } from "../Constants";
import { GameEngine } from "../GameEngine";
import { ItemKey } from "../items/ItemKey";
import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class PoolDeck extends BaseLocation {
  public id = LocationKey.PoolDeck;
  public title = "Pool Deck";
  public descriptionText =
    "You arrive at the pool deck. The pool is freeform and ridiculous in the best possible way. A mosaic-tile step rises from the center of it like a small ceremonial island. An elevated circular hot tub at the near end spills over via a cascade into the main pool. Limestone ledge walls with built-in waterfall features flank the entry steps. Color-changing LED lights cycle violet, magenta, electric blue — you suspect they are set to do this regardless of actual conditions. A foam ring float is tied to the nearest oak with a bungee cord. Pool loungers and two red patio umbrellas face outward toward the meadow. From here, looking back toward the Lodge, you can see the rocking chairs on the back porch.\n\nThe back porch of the Lodge is to the northwest. The oak grove is to the west. The hot tub is to the east. The sports court is to the north. The fire pit is to the south. The south meadow loops around to the southwest.";

  private raceDucks(gameEngine: GameEngine): string {
    if (gameEngine.questTracker.isComplete(Constants.Quests.DucksRaced)) {
      return "The ducks have already raced. The results are not recorded anywhere. The result is peace.";
    }
    if (!gameEngine.inventoryContains(ItemKey.CowboyRubberDuck)) {
      return "You'd need both ducks. The cowboy duck is somewhere in the Lodge.";
    }
    if (!gameEngine.inventoryContains(ItemKey.PlainRubberDuck)) {
      return "You'd need both ducks. The plain duck is in the hot tub.";
    }
    gameEngine.questTracker.complete(Constants.Quests.DucksRaced, gameEngine);
    return "You place both ducks at the near edge of the pool and start the waterfall feature. A current develops. The cowboy duck, with its hat and its convictions, pulls ahead early. The plain duck is steady, principled, unconcerned with hats. They cross the far end together. You declare a tie. Neither duck disputes this. (3 points)";
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map([
    [
      "examine pool",
      (_gameEngine) =>
        "The pool shifts between blue and green in the LED lighting cycle. The water is exceptionally clear. Near the far drain, something glints on the bottom. You peer closer. It's a quarter. You do not go in after it.",
    ],
    ["race ducks", (gameEngine: GameEngine) => this.raceDucks(gameEngine)],
    ["duck race", (gameEngine: GameEngine) => this.raceDucks(gameEngine)],
  ]);
}
