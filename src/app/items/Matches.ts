import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { lightFire } from "../locations/FirePit";

export class Matches extends BaseItem {
  public id = ItemKey.Matches;
  public name = "matches";
  public isShown = true;
  public value = 0;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "A box of long fireplace matches. Still mostly full. The striking strip is intact.";
  }

  public use(gameEngine: GameEngine): string {
    return lightFire(gameEngine);
  }

  public getLocationText(): string {
    return "A box of long matches is here.";
  }
}
