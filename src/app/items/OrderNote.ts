import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class OrderNote extends BaseItem {
  public id = ItemKey.OrderNote;
  public name = "cabin note";
  public isShown = false;
  public value = 2;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "A short note in black marker, folded once. Written quickly:\n\nWENT TO THE CABIN. FOLLOW THE STRING LIGHTS.\n\nBelow that, in different ink, someone added:\n\nCODE ORDER: COURT · SHED · TUB · BLIND";
  }

  public use(_gameEngine: GameEngine): string {
    return "You read the note again. COURT · SHED · TUB · BLIND — in that order.";
  }

  public getLocationText(): string {
    return "A folded note lies here.";
  }
}
