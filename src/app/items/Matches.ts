import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

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

  public use(_gameEngine: GameEngine): string {
    return "You strike a match. It flares. You hold it for a moment, then shake it out. Fire requires context.";
  }

  public getLocationText(): string {
    return "A box of long matches is on the shelf.";
  }
}
