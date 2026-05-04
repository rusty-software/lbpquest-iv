import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class WesternNovel extends BaseItem {
  public id = ItemKey.WesternNovel;
  public name = "novel";
  public isShown = true;
  public value = 4;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public take(_gameEngine: GameEngine): string {
    this.taken = true;
    return "You take the novel. You get the sense that you will also stop at page 12.";
  }

  public examine(_gameEngine: GameEngine): string {
    return "NO QUARTER GIVEN, a western novel. The cover shows a cowboy silhouetted against a sunset. The bookmark is at page 12. Perhaps it's always been at page 12. You open the book to page 12. It starts in the middle of a sentence that began on page 11.\n\n\"...no better place to heal a broken heart than on the back of a horse.\"\n\nThere's nothing to suggest why those that read that line stop here, yet you find yourself stopping as well.";
  }

  public use(_gameEngine: GameEngine): string {
    return "And just what are you planning to do with this book, if not read it...?";
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map(
    [["read", (gameEngine: GameEngine) => this.examine(gameEngine)]],
  );
}
