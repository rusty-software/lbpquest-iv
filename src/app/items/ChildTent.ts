import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class ChildTent extends BaseItem {
  public id = ItemKey.ChildTent;
  public name = "tent";
  public isShown = true;
  public value = 0;

  public canTake(_gameEngine: GameEngine): boolean {
    return false;
  }

  public take(_gameEngine: GameEngine): string {
    return "The tent is fully assembled and anchored to the carpet. You're not going to carry it anywhere.";
  }

  public examine(gameEngine: GameEngine): string {
    const alreadyLooked = this.entered;
    this.entered = true;

    if (!alreadyLooked) {
      gameEngine.getItem(ItemKey.GlowStick).isShown = true;
      gameEngine.getItem(ItemKey.StuffedArmadillo).isShown = true;
      gameEngine.getItem(ItemKey.GeraldNote).isShown = true;
      return "A child's pop-up tent in the corner of the master bedroom, fully assembled, door flap open. Inside: a green glow stick still faintly active, a stuffed armadillo, and a handwritten note.";
    }
    return "A child's pop-up tent. It is exactly as strange as it was the first time you looked.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You crouch and look inside the tent. There is a stuffed armadillo in there. It regards you with button eyes and no particular judgment.";
  }

  private entered = false;
}
