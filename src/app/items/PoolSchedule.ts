import { Constants } from "../Constants";
import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class PoolSchedule extends BaseItem {
  public id = ItemKey.PoolSchedule;
  public name = "schedule";
  public isShown = true;
  public value = 0;

  public canTake(_gameEngine: GameEngine): boolean {
    return false;
  }

  public take(_gameEngine: GameEngine): string {
    return "It's taped to the wall. You leave it.";
  }

  public examine(gameEngine: GameEngine): string {
    gameEngine.questTracker.complete(Constants.Quests.DigitShed, gameEngine);
    return "A laminated sheet taped to the shed wall. Pool maintenance intervals by day and hour — chlorine check, filter rinse, backwash cycle. Standard entries for every slot except one:\n\nTUESDAY 7:00 PM — GERALD\n\nNo further explanation. Circled twice in red marker. Someone has added beneath it in smaller letters: Do Not Disturb.";
  }

  public use(_gameEngine: GameEngine): string {
    return "The schedule is informational. It informs you that Gerald's pool time is Tuesday at 7:00 PM.";
  }

  public getLocationText(): string {
    return "A laminated pool schedule is taped to the wall.";
  }
}
