import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { LocationKey } from "../locations/LocationKey";
import { playPickleball } from "../locations/SportsCourt";

export class PickleballPaddle extends BaseItem {
  public id = ItemKey.PickleballPaddle;
  public name = "paddle";
  public isShown = true;
  public value = 2;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public take(_gameEngine: GameEngine): string {
    this.taken = true;
    return "You take the paddle. Your form is already worse than you think.";
  }

  public getLocationText(): string {
    return "A pickleball paddle is here.";
  }

  public examine(_gameEngine: GameEngine): string {
    return "A pickleball paddle. Standard weight, slightly worn grip tape. Gerald has ignored it entirely, which says something about Gerald that you can't quite articulate.";
  }

  public use(gameEngine: GameEngine): string {
    if (gameEngine.currentLocation.id === LocationKey.SportsCourt) {
      return playPickleball(gameEngine);
    }
    return "You swing the paddle. The air does not resist meaningfully.";
  }
}
