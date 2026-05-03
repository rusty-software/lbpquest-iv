import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class RoseBottle extends BaseItem {
  public id = ItemKey.RoseBottle;
  public name = "rosé";
  public isShown = true;
  public value = 2;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "A bottle of Provençal rosé, already cold. The label is tasteful — pale pink wine in a clear bottle. Someone brought this specifically. Someone with a plan.";
  }

  public use(_gameEngine: GameEngine): string {
    if (!this.taken) {
      return "You should take it first.";
    }
    return "You pour a glass of rosé. It is cold, dry, and exactly right. You feel immediately more at ease.";
  }

  public getLocationText(): string {
    return "A bottle of rosé is chilling on the bar.";
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map([
    ["drink", (gameEngine: GameEngine) => this.use(gameEngine)],
  ]);
}
