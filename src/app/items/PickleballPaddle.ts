import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class PickleballPaddle extends BaseItem {
  public id = ItemKey.PickleballPaddle;
  public name = "paddle";
  public isShown = true;
  public value = 1;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "A pickleball paddle resting on top of the net post. Standard weight, slightly worn grip tape. Gerald ignores it entirely, which says something about Gerald that you can't quite articulate.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You swing the paddle. The air does not resist meaningfully.";
  }
}
