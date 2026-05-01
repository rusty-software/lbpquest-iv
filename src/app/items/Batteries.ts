import { Constants } from "../Constants";
import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class Batteries extends BaseItem {
  public id = ItemKey.Batteries;
  public name = "batteries";
  public isShown = false;
  public value = 5;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "Two AA batteries. They came out of the cactus nightlight. They will work fine.";
  }

  public use(gameEngine: GameEngine): string {
    if (gameEngine.inventoryContains(ItemKey.Flashlight)) {
      gameEngine.questTracker.complete(Constants.Quests.FlashlightActivated, gameEngine);
      gameEngine.removeFromInventory(ItemKey.Batteries);
      return "You load the batteries into the flashlight. It clicks on. A bright beam. Much better.";
    }
    return "You hold the batteries. They do not do much on their own.";
  }
}
