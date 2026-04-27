import { GameEngine } from "../GameEngine";
import { Item } from "../Item";
import { ItemKey } from "./ItemKey";

export class BaseItem implements Item {
  public id = ItemKey._Nothing;
  public name = "";
  public isShown = false;
  public value = 0;
  public taken = false;
  public customVerbs: Map<string, (gameEngine: GameEngine) => string> =
    new Map();

  public getName(): string {
    return "is a(n) " + this.name;
  }

  public getLocationText(): string {
    return `There ${this.getName()} here.`;
  }

  public canTake(_gameEngine: GameEngine): boolean {
    throw new Error("Method not implemented.");
  }

  public take(_gameEngine: GameEngine): string {
    this.taken = true;
    return "Taken.";
  }

  public drop(_gameEngine: GameEngine): string {
    return "Dropped.";
  }

  public examine(_gameEngine: GameEngine): string {
    throw new Error("Method not implemented.");
  }

  public use(_gameEngine: GameEngine): string {
    throw new Error("Method not implemented.");
  }
}
