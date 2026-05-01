import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class BlantonsBottle extends BaseItem {
  public id = ItemKey.BlantonsBottle;
  public name = "blanton's";
  public isShown = true;
  public value = 5;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "An unopened fifth of Blanton's Single Barrel Bourbon. The gold wax cap is unbroken. The little horse-and-jockey stopper is sealed inside. Someone showed remarkable restraint.";
  }

  public getLocationText(): string {
    return "An unopened fifth of Blanton's is here.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You open the Blanton's. You smell the bourbon. You close it again. Some things should wait for the right moment.";
  }
}
