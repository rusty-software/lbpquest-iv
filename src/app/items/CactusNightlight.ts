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
    return "It's plugged into the wall. You don't need the whole nightlight — just the batteries.";
  }

  public examine(gameEngine: GameEngine): string {
    if (!gameEngine.inventoryContains(ItemKey.Batteries) && !this.batteriesTaken) {
      this.batteriesTaken = true;
      gameEngine.addToInventory(ItemKey.Batteries);
      const batteries = gameEngine.getItem(ItemKey.Batteries);
      batteries.taken = true;
      gameEngine.score += batteries.value;
      return "A small ceramic cactus nightlight plugged into the wall beside the bedside table. Green, squat, cheerful. You pop open the battery compartment on the back. Two AA batteries. You take them.";
    }
    if (this.batteriesTaken) {
      return "A small ceramic cactus nightlight. The battery compartment is open and empty. It is less cheerful now.";
    }
    return "A small ceramic cactus nightlight plugged into the wall. Green, squat, cheerful. It has a battery compartment on the back.";
  }

  public use(_gameEngine: GameEngine): string {
    return "The nightlight is already doing its job. Sort of.";
  }

  private batteriesTaken = false;
}
