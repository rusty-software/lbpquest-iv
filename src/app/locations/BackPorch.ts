import { Constants } from "../Constants";
import { GameEngine } from "../GameEngine";
import { ItemKey } from "../items/ItemKey";
import { BlantonsBottle } from "../items/BlantonsBottle";
import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class BackPorch extends BaseLocation {
  public id = LocationKey.BackPorch;
  public title = "Back Porch";
  public descriptionText =
    "You step out onto the back porch — the Lodge's best feature. A broad cedar-roofed pavilion extends from the rear of the building. A massive flatscreen TV is mounted flush to the cedar wall, currently showing a highway somewhere in the mountains — the kind of highway that goes somewhere much colder than here. An outdoor sectional sofa with linen cushions surrounds a low fire table. Two wooden rocking chairs face the yard. Against one post stands a high-top bar built from the cross-section of an enormous live oak trunk, still rough on the edges. String lights run from the eaves out toward the pool deck.\n\nThe Great Room is to the north. The pool deck is to the southeast.";

  private makeDrink(gameEngine: GameEngine): string {
    if (gameEngine.questTracker.isComplete(Constants.Quests.DrinkMixed)) {
      return "You already made one. The bar is still here. The Blanton's is still open. It will keep.";
    }
    if (!gameEngine.inventoryContains(ItemKey.BlantonsBottle)) {
      return "You'd need the Blanton's. It might be here on the porch somewhere.";
    }
    const blanton = gameEngine.getItem(ItemKey.BlantonsBottle) as BlantonsBottle;
    if (!blanton.opened) {
      return "The Blanton's is still sealed. You might want to open it first.";
    }
    gameEngine.questTracker.complete(Constants.Quests.DrinkMixed, gameEngine);
    return "You find a glass behind the bar — short, heavy, the right weight. Two fingers of Blanton's. A single large ice cube from the steel bucket. A moment while it settles. You take it to the rocking chair. You drink slowly. The string lights are on. The night is warm. Your friends are somewhere out there. This is the right drink at the right time. (2 points)";
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map([
    [
      "examine bar",
      (_gameEngine) =>
        "The oak bar is rough-cut and well-used. Pinned to the post behind it: a handwritten cocktail menu on cardstock, slightly warped from humidity.\n\nTHE BLIND BUCK — 1 oz bourbon, honey, splash of bitters\nTHE COURT JESTER — 3 oz ranch water, lime, never enough ice\nTHE SHED SPECIAL — 7-year rye, neat, no argument\nTHE TUB FLOAT — 2 oz coconut rum, pineapple, served in whatever's clean\n\nThe prices are crossed out. Everything here is on the ranch.",
    ],
    ["make drink", (gameEngine: GameEngine) => this.makeDrink(gameEngine)],
    ["mix drink", (gameEngine: GameEngine) => this.makeDrink(gameEngine)],
    ["pour drink", (gameEngine: GameEngine) => this.makeDrink(gameEngine)],
  ]);
}
