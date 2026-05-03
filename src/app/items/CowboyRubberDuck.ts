import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class CowboyRubberDuck extends BaseItem {
  public id = ItemKey.CowboyRubberDuck;
  public name = "cowboy duck";
  public isShown = true;
  public value = 4;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public take(_gameEngine: GameEngine): string {
    this.taken = true;
    return "You take the duck. The hat stays on despite your best efforts to dislodge it.";
  }

  public getLocationText(): string {
    return "A cowboy duck in a tiny brown hat is here.";
  }

  public examine(_gameEngine: GameEngine): string {
    return "A rubber duck wearing a tiny brown cowboy hat, secured with what appears to be a very small amount of rubber cement. The hat fits perfectly. The duck stares at you with the confidence of something that has nothing to prove.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You squeeze the duck. It makes a small, dignified sound. The cowboy hat does not fall off.";
  }
}
