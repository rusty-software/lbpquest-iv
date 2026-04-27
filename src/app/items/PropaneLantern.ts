import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class PropaneLantern extends BaseItem {
  public id = ItemKey.PropaneLantern;
  public name = "lantern";
  public isShown = true;
  public value = 4;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "A propane lantern hanging from a hook in the wooden pavilion. You twist the valve. Nothing. Empty. It has the particular sadness of things left underfueled.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You try the lantern. No fuel. It does not light.";
  }
}
