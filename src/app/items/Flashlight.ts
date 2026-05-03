import { Constants } from "../Constants";
import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class Flashlight extends BaseItem {
  public id = ItemKey.Flashlight;
  public name = "flashlight";
  public isShown = true;
  public value = 10;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public take(_gameEngine: GameEngine): string {
    this.taken = true;
    return "You take the flashlight. It's surprisingly heavy — probably the kind of flashlight that can double as a weapon.";
  }

  public examine(_gameEngine: GameEngine): string {
    return "A heavy-duty Maglite in olive drab. You click it. Nothing happens. The batteries are dead.";
  }

  public use(gameEngine: GameEngine): string {
    if (gameEngine.inventoryContains(ItemKey.Batteries)) {
      gameEngine.questTracker.complete(
        Constants.Quests.FlashlightActivated,
        gameEngine,
      );
      gameEngine.removeFromInventory(ItemKey.Batteries);
      return "You load the batteries. The flashlight clicks on with a satisfying snap. A bright beam cuts through the room. You feel considerably better about dealing with dark places now.";
    }
    return "Click. Nothing. You need batteries first.";
  }
}
