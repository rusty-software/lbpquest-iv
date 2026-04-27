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
    return "It is mounted. You leave it.";
  }

  public examine(_gameEngine: GameEngine): string {
    return "A lone mounting bracket on the hallway wall — the kind designed to cradle something taxidermied, something with presence. The bracket is occupied by a stick. A plain stick. The bracket was clearly built for something else and has not fully come to terms with what it ended up with.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You look at the stick on the bracket. The stick does not respond.";
  }
}
