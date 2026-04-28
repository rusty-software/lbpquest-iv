import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class ScoreboardSign extends BaseItem {
  public id = ItemKey.ScoreboardSign;
  public name = "scoreboard";
  public isShown = true;
  public value = 0;

  public canTake(_gameEngine: GameEngine): boolean {
    return false;
  }

  public take(_gameEngine: GameEngine): string {
    return "It's hung on the gate. You leave it.";
  }

  public examine(_gameEngine: GameEngine): string {
    return "A small whiteboard on a hook by the sports court gate. Written in green marker:\n\nGERALD: 3\nHUMANS: 0\n\nThe 3 has a quality of permanence to it — not a score so much as a fact of the property. The marker is nearly dry. No one has tried to change it.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You update the scoreboard in your mind. It does not improve.";
  }
}
