import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class Pickleball extends BaseItem {
  public id = ItemKey.Pickleball;
  public name = "pickleball";
  public isShown = true;
  public value = 0;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "A regulation pickleball — the outdoor kind, with holes for aerodynamics. It is a small, yellow, fundamentally serious object that has become inexplicably popular among people who have reached an age of contentment.";
  }

  public use(_gameEngine: GameEngine): string {
    return "Without a paddle and a court, this is just bouncing a ball.";
  }

  public getLocationText(): string {
    return "A pickleball sits in the equipment bin.";
  }
}
