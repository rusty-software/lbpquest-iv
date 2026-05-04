import { Constants } from "../Constants";
import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { LocationKey } from "../locations/LocationKey";

export class Binoculars extends BaseItem {
  public id = ItemKey.Binoculars;
  public name = "binoculars";
  public isShown = true;
  public value = 10;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public getLocationText(): string {
    return "A pair of binoculars is here.";
  }

  public examine(_gameEngine: GameEngine): string {
    return "A pair of 8x42 binoculars. Good quality glass... these were not bought cheaply...";
  }

  public use(gameEngine: GameEngine): string {
    switch (gameEngine.currentLocation.id) {
      case LocationKey.WoodenPavilion:
        gameEngine.questTracker.complete(
          Constants.Quests.GeraldSpotted,
          gameEngine,
        );
        return "Through the binoculars you can see the Lodge's back porch clearly: the rocking chairs, the flatscreen TV, the log bar. In one of the rocking chairs, something large and brown is sitting. You adjust the focus. It is Gerald. He is just sitting there. In a rocking chair. On the back porch.";
      case LocationKey.BackPorch: {
        const fireLit = gameEngine.questTracker.isComplete(
          Constants.Quests.FireLit,
        );
        if (fireLit) {
          return "Through the binoculars you can see past the pool deck to the fire pit clearing beyond. The camp chairs are arranged around the pit. The fire is going — flickering flame light, orange against the dark trees. Someone (you) made that fire. You scan for movement but detect none. The chairs are empty, and the fire doesn't care.";
        }
        return "Through the binoculars you can see past the pool deck to the fire pit clearing beyond. The camp chairs are arranged around it. The fire pit is cold. No one is there, or near there, or visible anywhere in that direction.";
      }
      case LocationKey.DeerBlind: {
        const hotTub = gameEngine.getLocation(LocationKey.HotTub);
        const duckInTub = hotTub.items.some(
          (i) => i.id === ItemKey.PlainRubberDuck && i.isShown,
        );
        if (duckInTub) {
          gameEngine.questTracker.complete(
            Constants.Quests.DigitTub,
            gameEngine,
          );
          return "Through the shooting window you scan north. You see two deer in the meadow, motionless. Continuing the scan, you see the pool deck and the hot tub above it, jets running. You train the glass on the hot tub. There is a rubber duck in there. As it bobs up and down, you hold the focus on the flat base of it. In faded marker, you see the number 2 written on bottom.";
        }
        return "Through the shooting window you scan north. You see two deer in the meadow, motionless. Continuing the scan, you see the pool deck and the hot tub above it, jets running. The hot tub is otherwise unoccupied.";
      }
      default:
        return "You raise the binoculars and look around. The view isn't very interesting from here.";
    }
  }

  public getName(): string {
    return "are some binoculars";
  }
}
