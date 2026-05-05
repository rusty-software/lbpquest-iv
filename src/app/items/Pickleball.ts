import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { LocationKey } from "../locations/LocationKey";
import { playPickleball } from "../locations/SportsCourt";

export class Pickleball extends BaseItem {
  public id = ItemKey.Pickleball;
  public name = "pickleball";
  public isShown = true;
  public value = 0;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "A regulation pickleball — the outdoor kind, with holes for aerodynamics. It is a small, yellow, fundamentally serious object that has become inexplicably popular among people who, like you, have reached an age of contentment.";
  }

  public use(gameEngine: GameEngine): string {
    if (gameEngine.currentLocation.id === LocationKey.SportsCourt) {
      return playPickleball(gameEngine);
    }
    return "Without a paddle and a court, this is just bouncing a ball.";
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map(
    [["play", (gameEngine: GameEngine) => this.use(gameEngine)]],
  );

  public getLocationText(): string {
    return "A pickleball is here, looking a bit forlorn.";
  }
}
