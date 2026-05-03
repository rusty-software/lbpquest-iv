import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class BrokenJigger extends BaseItem {
  public id = ItemKey.BrokenJigger;
  public name = "jigger";
  public isShown = true;
  public value = 5;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "A brass mechanical bar jigger, the kind with two cones joined at the waist. One side has sheared off the pivot — it's broken, unusable as a measuring device. But it's very shiny. It catches the light in a way that seems objectively irresponsible.";
  }

  public getLocationText(): string {
    return "A broken brass jigger is here.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You wave the jigger around. It catches the light beautifully. Nothing nearby seems immediately captivated. Maybe Gerald needs to be here first.";
  }
}
