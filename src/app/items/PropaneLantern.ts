import { Constants } from "../Constants";
import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class PropaneLantern extends BaseItem {
  public id = ItemKey.PropaneLantern;
  public name = "lantern";
  public isShown = true;
  public value = 8;
  public isLit = false;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public getLocationText(): string {
    return this.isLit
      ? "A lit propane lantern is here, burning with a warm amber flame."
      : "A propane lantern is here.";
  }

  public examine(_gameEngine: GameEngine): string {
    if (this.isLit) {
      return "A propane lantern burning with a steady amber flame. The light is warm and even — better for reading fine detail than a flashlight's harsh beam.";
    }
    return "A propane lantern. You twist the valve and get nothing. It has the particular sadness of things left underfueled.";
  }

  public use(gameEngine: GameEngine): string {
    if (this.isLit) {
      return "The lantern is already burning.";
    }
    if (gameEngine.inventoryContains(ItemKey.FuelCanister)) {
      this.isLit = true;
      gameEngine.questTracker.complete(Constants.Quests.LanternLit, gameEngine);
      gameEngine.removeFromInventory(ItemKey.FuelCanister);
      return "You screw the canister into the lantern base and turn the valve. A soft hiss, then a click — the mantle catches and blooms into warm amber light. The lantern is lit.";
    }
    return "You try the lantern. No fuel. It does not light.";
  }
}
