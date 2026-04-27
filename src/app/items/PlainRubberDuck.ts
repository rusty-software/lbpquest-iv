import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class PlainRubberDuck extends BaseItem {
  public id = ItemKey.PlainRubberDuck;
  public name = "plain duck";
  public isShown = true;
  public value = 2;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "A rubber duck in the hot tub. Unadorned, unhatted, making no particular statement. It has less charisma than the one in the master bathroom, but it has made peace with this.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You squeeze the duck. It squeaks. That's all.";
  }
}
