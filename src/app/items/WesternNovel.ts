import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class WesternNovel extends BaseItem {
  public id = ItemKey.WesternNovel;
  public name = "novel";
  public isShown = true;
  public value = 2;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "NO QUARTER GIVEN, a western novel. The cover shows a cowboy silhouetted against a sunset. The bookmark is at page 12. It has always been at page 12. You open to page 12. It is the middle of a sentence that started on page 11. You read it. Nothing in it suggests why someone stopped here.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You read a few more pages. The cowboy shoots someone. It is unresolved. You put the book down at page 14.";
  }
}
