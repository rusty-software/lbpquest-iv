import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class BlantonsBottle extends BaseItem {
  public id = ItemKey.BlantonsBottle;
  public name = "blanton's";
  public isShown = true;
  public value = 10;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public opened = false;

  public examine(_gameEngine: GameEngine): string {
    if (this.opened) {
      return "A fifth of Blanton's Single Barrel Bourbon, open. The gold wax is broken at the neck, although the horse-and-jockey stopper remains intact.";
    }
    return "An unopened fifth of Blanton's Single Barrel Bourbon. The gold wax cap is unbroken. The little horse-and-jockey stopper is still sealed. Someone showed remarkable restraint.";
  }

  public getLocationText(): string {
    return this.opened
      ? "A fifth of Blanton's is here."
      : "An unopened fifth of Blanton's is here.";
  }

  public use(_gameEngine: GameEngine): string {
    if (this.opened) {
      return "You open the Blanton's again, smell the bourbon, and realize that it's still not the right moment.";
    }
    this.opened = true;
    return "You open the Blanton's. You smell the bourbon. You close it again. Some things should wait for the right moment.";
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map(
    [["drink", (gameEngine: GameEngine) => this.use(gameEngine)]],
  );
}
