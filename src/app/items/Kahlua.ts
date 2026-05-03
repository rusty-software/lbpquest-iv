import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class Kahlua extends BaseItem {
  public id = ItemKey.Kahlua;
  public name = "kahlúa";
  public isShown = true;
  public value = 2;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "A bottle of Kahlúa coffee liqueur. The dark bottle is half-full. Someone has been responsible with it, which is not a trait you associate with this particular ranch house.";
  }

  public use(_gameEngine: GameEngine): string {
    if (!this.taken) {
      return "You should take it first.";
    }
    return "You take a pull of Kahlúa directly from the bottle, because no one is watching and the glasses are in the other room. It is sweet, rich, and unambiguously correct.";
  }

  public getLocationText(): string {
    return "A bottle of Kahlúa is on the bar shelf.";
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map([
    ["drink", (gameEngine: GameEngine) => this.use(gameEngine)],
  ]);
}
