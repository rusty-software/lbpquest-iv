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
    return "A Lone Star tallboy, cold from the mudroom refrigerator. The Texas state seal is on the can. The seal is proud. The beer is adequate. Together they are iconic.";
  }

  public use(_gameEngine: GameEngine): string {
    if (this.taken) {
      return "You crack the tallboy. It hisses. You drink. It tastes exactly like Texas.";
    }
    return "You should probably take it first.";
  }

  public getLocationText(): string {
    return "A Lone Star tallboy is on the mudroom shelf.";
  }
}
