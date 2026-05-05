import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class LoneStarTallboy extends BaseItem {
  public id = ItemKey.LoneStarTallboy;
  public name = "tallboy";
  public isShown = true;
  public value = 2;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "A Lone Star tallboy, still retaining a semblance of coolness. The Texas state seal is on the can. The seal is overtly proud. The beer is distinctly adequate. Together they are iconic.";
  }

  public use(_gameEngine: GameEngine): string {
    if (this.taken) {
      return "You crack the tallboy. It hisses. You drink. It tastes exactly like Texas.";
    }
    return "You should probably take it first.";
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map(
    [["drink", (gameEngine: GameEngine) => this.use(gameEngine)]],
  );

  public getLocationText(): string {
    return "A Lone Star tallboy is here, tempting you...";
  }
}
