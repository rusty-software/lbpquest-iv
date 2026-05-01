import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class StuffedArmadillo extends BaseItem {
  public id = ItemKey.StuffedArmadillo;
  public name = "armadillo";
  public isShown = false;
  public value = 2;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "A stuffed toy armadillo, well-loved, with a slightly flattened snout from years of deployment in some child's nightly defensive operations. It has button eyes and passes no judgment whatsoever. Its character is unimpeachable.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You hold up the armadillo. It does not appear to do anything. This is fine.";
  }
}
