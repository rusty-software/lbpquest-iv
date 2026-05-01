import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class CactusNightlight extends BaseItem {
  public id = ItemKey.CactusNightlight;
  public name = "nightlight";
  public isShown = true;
  public value = 0;

  public canTake(_gameEngine: GameEngine): boolean {
    return false;
  }

  public take(_gameEngine: GameEngine): string {
    return "You don't need the whole nightlight. Just the batteries.";
  }

  public examine(gameEngine: GameEngine): string {
    if (!gameEngine.inventoryContains(ItemKey.Batteries) && !this.batteriesTaken) {
      this.batteriesTaken = true;
      gameEngine.addToInventory(ItemKey.Batteries);
      const batteries = gameEngine.getItem(ItemKey.Batteries);
      batteries.taken = true;
      gameEngine.score += batteries.value;
      return "A small ceramic cactus nightlight on the bedside table, green, squat, and cheerful. As you examine it, the battery compartment spontaneously pops open and two AA batteries are ejected, flying straight at your face. You catch them just before they can impact your nose and put them safely in your bag.";
    }
    if (this.batteriesTaken) {
      return "A small ceramic cactus nightlight on the bedside table. The battery compartment is open and empty. It is less cheerful now.";
    }
    return "A small ceramic cactus nightlight on the bedside table, green, squat, and cheerful. It has a battery compartment on the back.";
  }

  public use(_gameEngine: GameEngine): string {
    return "The nightlight is already doing its job. Sort of.";
  }

  private batteriesTaken = false;
}
