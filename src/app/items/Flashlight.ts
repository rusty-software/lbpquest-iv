import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class Flashlight extends BaseItem {
  public id = ItemKey.Flashlight;
  public name = "flashlight";
  public isShown = true;
  public value = 5;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "A heavy-duty Maglite in olive drab. You click it. Nothing happens. Dead batteries.";
  }

  public use(gameEngine: GameEngine): string {
    if (gameEngine.inventoryContains(ItemKey.Batteries)) {
      if (!gameEngine.flashlightActive) gameEngine.score += 5;
      gameEngine.flashlightActive = true;
      gameEngine.removeFromInventory(ItemKey.Batteries);
      return "You load the batteries. The flashlight clicks on with a satisfying snap. A bright beam cuts through the room. You feel considerably better about the cedar brake now.";
    }
    return "Click. Nothing. You need batteries first.";
  }
}
