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

  public getLocationText(): string {
    return "A plain rubber duck is here.";
  }

  public examine(_gameEngine: GameEngine): string {
    return "A plain rubber duck. Unadorned, unhatted, at peace with its limitations. On the flat bottom, in faded permanent marker: 2. Just the number 2. No explanation.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You squeeze the duck. It squeaks. That's all.";
  }
}
