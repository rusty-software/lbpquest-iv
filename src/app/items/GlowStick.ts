import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class GlowStick extends BaseItem {
  public id = ItemKey.GlowStick;
  public name = "glow stick";
  public isShown = false;
  public value = 2;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public take(_gameEngine: GameEngine): string {
    this.taken = true;
    return "You take the glow stick. You are now prepared for a rave, circa 2003.";
  }

  public examine(_gameEngine: GameEngine): string {
    return "A green chemical glow stick, still active, producing a dim sickly light. It is not bright enough to safely navigate the cedar brake. It is only bright enough to make you feel like you should be at a rave, circa 2003.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You wave the glow stick. It glows. This is the full extent of what it does.";
  }

  public getName(): string {
    return "is a glow stick";
  }
}
