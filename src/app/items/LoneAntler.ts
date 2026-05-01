import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class LoneAntler extends BaseItem {
  public id = ItemKey.LoneAntler;
  public name = "antler";
  public isShown = true;
  public value = 0;

  public canTake(_gameEngine: GameEngine): boolean {
    return false;
  }

  public take(_gameEngine: GameEngine): string {
    return "It's bolted to the cedar. You consider it for longer than is reasonable, finally leaving it.";
  }

  public examine(_gameEngine: GameEngine): string {
    return "A single antler mounted beside the whiskey room porch door. Two tines. Modest. Decorative. It has been here long enough that it no longer draws comment from whoever comes and goes.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You look at the antler. The antler does not engage.";
  }
}
