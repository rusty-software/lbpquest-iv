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
    return "A rubber duck in the hot tub. Unadorned, unhatted, at peace with its limitations. You pick it up out of curiosity and flip it over. On the flat bottom, in faded permanent marker: 2. Just the number 2. No explanation. You set it back in the water.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You squeeze the duck. It squeaks. That's all.";
  }
}
