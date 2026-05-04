import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class WhiteboardNote extends BaseItem {
  public id = ItemKey.WhiteboardNote;
  public name = "whiteboard";
  public isShown = true;
  public value = 0;

  public canTake(_gameEngine: GameEngine): boolean {
    return false;
  }

  public take(_gameEngine: GameEngine): string {
    return "What happens if someone else needs to leave an important fridge note? You wisely decide to leave it.";
  }

  public examine(_gameEngine: GameEngine): string {
    return 'A small whiteboard on the refrigerator door. Written in red marker:\n\n"Gerald got the last two beers. Check the whiskey room."\n\nThe handwriting is resigned.';
  }

  public use(_gameEngine: GameEngine): string {
    return "You consider adding something to the whiteboard, but finally decide not to.";
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map(
    [["read", (gameEngine: GameEngine) => this.examine(gameEngine)]],
  );
}
