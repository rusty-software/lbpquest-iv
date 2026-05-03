import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class OrderNote extends BaseItem {
  public id = ItemKey.OrderNote;
  public name = "cabin note";
  public isShown = false;
  public value = 4;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public take(_gameEngine: GameEngine): string {
    this.taken = true;
    return "You take the note. You get the sense that if you haven't read the note, you probably should...";
  }

  public examine(_gameEngine: GameEngine): string {
    return "A short note written with black marker with either quick or terrible handwriting, folded once.\n\nWENT TO THE WHISKEY CABIN. FOLLOW THE STRING LIGHTS.\n\nBelow that, in different ink, someone added:\n\nCODE ORDER: COURT · SHED · TUB · BLIND";
  }

  public use(_gameEngine: GameEngine): string {
    return "You read the note again. COURT · SHED · TUB · BLIND — in that order.";
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map(
    [["read", (gameEngine: GameEngine) => this.examine(gameEngine)]],
  );

  public getLocationText(): string {
    return "A folded note lies here.";
  }
}
