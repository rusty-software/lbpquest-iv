import { Constants } from "../Constants";
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
    return "You reach for it, then stop. Gerald: 3. Humans: 0. Some records deserve to stand.";
  }

  public examine(gameEngine: GameEngine): string {
    gameEngine.questTracker.complete(Constants.Quests.DigitCourt, gameEngine);
    return "A small whiteboard on a hook by the sports court gate. Written in green marker:\n\nGERALD: 3\nHUMANS: 0\n\nThe 3 has a quality of permanence to it — not a score so much as a fact of the property. The marker is nearly dry. No one has tried to change it.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You update the scoreboard in your mind. It does not improve.";
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map([
    ["read", (gameEngine: GameEngine) => this.examine(gameEngine)],
  ]);
}
