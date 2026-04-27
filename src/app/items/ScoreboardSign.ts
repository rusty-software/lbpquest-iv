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
    return "A small whiteboard on a hook by the sports court gate. Written in green marker:\n\nGERALD: 3\nHUMANS: 0\n\nThe scores appear to be permanent. The marker is drying out.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You update the scoreboard in your mind. It does not improve.";
  }
}
