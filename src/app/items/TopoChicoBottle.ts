import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class TopoChicoBottle extends BaseItem {
  public id = ItemKey.TopoChicoBottle;
  public name = "topo chico";
  public isShown = true;
  public value = 5;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "An empty Topo Chico bottle. The bottle is completely dry inside. Whoever last drank from it finished it properly.";
  }

  public use(_gameEngine: GameEngine): string {
    return "Given it's empty, you look through the bottle at the sky. The light is interesting. Nothing happens.";
  }

  public getLocationText(): string {
    return "An empty Topo Chico bottle is here.";
  }

  public getName(): string {
    return "is an empty Topo Chico bottle";
  }
}
