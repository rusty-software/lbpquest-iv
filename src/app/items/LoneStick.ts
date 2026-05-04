import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class LoneStick extends BaseItem {
  public id = ItemKey.LoneStick;
  public name = "stick";
  public isShown = true;
  public value = 0;

  public canTake(_gameEngine: GameEngine): boolean {
    return false;
  }

  public take(_gameEngine: GameEngine): string {
    return "The bracket is bolted firmly into the wall. You give the stick an experimental tug. It doesn't move. You tug it again. It doesn't move again. You will not be mentioning your tugging attempts to anyone.";
  }

  public examine(_gameEngine: GameEngine): string {
    return "A lone mounting bracket on the hallway wall — the kind designed to cradle something taxidermied, something with presence. The bracket is occupied by a stick. A plain stick. The bracket was clearly built for something else and has not fully come to terms with what it ended up with.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You attempt to use the stick on the bracket. The stick does not respond to your attempts.";
  }
}
