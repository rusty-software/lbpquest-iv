import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class EmptyBeerCan extends BaseItem {
  public id = ItemKey.EmptyBeerCan;
  public name = "beer can";
  public isShown = true;
  public value = 1;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "An empty Lone Star tallboy. Placed at the base of Gerald's Tree with what appears to be intention — not dropped, placed. Gerald does not drink beer. Someone left this for Gerald. Gerald accepted the tribute.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You shake the can. Empty.";
  }

  public getName(): string {
    return "is an empty beer can";
  }
}
