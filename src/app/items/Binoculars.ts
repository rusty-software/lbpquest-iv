import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { LocationKey } from "../locations";

export class Binoculars extends BaseItem {
  public id = ItemKey.Binoculars;
  public name = "binoculars";
  public isShown = true;
  public value = 5;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public getLocationText(): string {
    return "A pair of binoculars is here.";
  }

  public examine(_gameEngine: GameEngine): string {
    return "A pair of 8x42 binoculars. Good glass — these were not bought cheaply. Someone left them here and apparently does not need them back.";
  }

  public use(gameEngine: GameEngine): string {
    switch (gameEngine.currentLocation.id) {
      case LocationKey.WoodenPavilion:
        return "Through the binoculars you can see the Lodge's back porch clearly — the rocking chairs, the flatscreen TV, the log bar. In one of the rocking chairs, something large and brown is sitting. You adjust the focus. It is Gerald. He is just sitting there. In a rocking chair. On the back porch.";
      case LocationKey.BackPorch:
        return "Through the binoculars you can see past the pool deck to the fire pit clearing beyond. The camp chairs are arranged. The fire pit is cold. No one is there, or near there, or visible anywhere in that direction.";
      case LocationKey.DeerBlind:
        return "Through the shooting window you scan north. Two deer in the meadow, motionless. The pool deck. The hot tub above it, jets running. You train the glass on the hot tub. There is a rubber duck in there. You hold the focus on the flat base of it. Faded marker. The number 2.";
      default:
        return "You raise the binoculars and look around. The view is interesting from here.";
    }
  }

  public getName(): string {
    return "are some binoculars";
  }
}
