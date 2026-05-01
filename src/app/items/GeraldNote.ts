import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class GeraldNote extends BaseItem {
  public id = ItemKey.GeraldNote;
  public name = "tent note";
  public isShown = false;
  public value = 2;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public take(_gameEngine: GameEngine): string {
    this.taken = true;
    return "You take the note. G would not approve.";
  }

  public examine(_gameEngine: GameEngine): string {
    return "A handwritten note on a torn piece of paper, written in a surprisingly neat hand:\n\nTHIS IS MY TENT\n— G";
  }

  public use(_gameEngine: GameEngine): string {
    return "You read the note again. It says what it says.";
  }
}
