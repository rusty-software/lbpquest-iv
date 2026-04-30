import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class FuelCanister extends BaseItem {
  public id = ItemKey.FuelCanister;
  public name = "fuel canister";
  public isShown = true;
  public value = 3;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "A small green propane canister, the kind that screws into a camp lantern or stove. It has good weight to it — still full.";
  }

  public getLocationText(): string {
    return "A small propane fuel canister is here.";
  }

  public use(gameEngine: GameEngine): string {
    if (gameEngine.inventoryContains(ItemKey.PropaneLantern)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const lantern = gameEngine.getItem(ItemKey.PropaneLantern) as any;
      if (lantern.isLit) {
        return "The lantern is already burning.";
      }
      lantern.isLit = true;
      if (!gameEngine.lanternLit) gameEngine.score += 3;
      gameEngine.lanternLit = true;
      gameEngine.removeFromInventory(ItemKey.FuelCanister);
      return "You screw the canister into the lantern base and turn the valve. A soft hiss, then a click — the mantle catches and blooms into warm amber light. The lantern is lit.";
    }
    return "You twist the valve. Propane hisses out briefly. You stop before you waste it.";
  }
}
