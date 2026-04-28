import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class TopoChicoBottle extends BaseItem {
  public id = ItemKey.TopoChicoBottle;
  public name = "topo chico";
  public isShown = true;
  public value = 3;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "An empty Topo Chico bottle on the armrest of an Adirondack chair at the fire pit. Someone was here. Recently. The bottle is dry inside — they finished it properly, at least.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You look through the bottle at the sky. The light is interesting. Nothing happens.";
  }

  public getName(): string {
    return "is an empty Topo Chico bottle";
  }
}
