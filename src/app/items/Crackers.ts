import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class Crackers extends BaseItem {
  public id = ItemKey.Crackers;
  public name = "crackers";
  public isShown = true;
  public value = 3;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "A sleeve of Ritz crackers. Mostly intact. These would be very interesting to a turkey.";
  }

  public use(gameEngine: GameEngine): string {
    if (gameEngine.currentLocation.hasItem(ItemKey.Gerald)) {
      const geraldVerb = gameEngine.getItem(ItemKey.Gerald).customVerbs.get("give crackers to");
      if (geraldVerb) return geraldVerb(gameEngine);
    }
    return "You open the crackers. Nothing nearby seems immediately interested. Maybe Gerald needs to be here first.";
  }

  public getName(): string {
    return "are some crackers";
  }
}
