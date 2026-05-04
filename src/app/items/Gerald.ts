import { Constants } from "../Constants";
import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

const geraldDescriptions = [
  "Gerald is a large tom turkey, and he is standing in the middle of the path. He looks at you with one eye, then the other. He does not move. He makes a sound like a rusty gate.",
  "Gerald — a full-grown tom turkey, for the record — has arrived and is now patrolling the area with the grim efficiency of a regional manager doing a surprise audit.",
  "Gerald is here. He's a large turkey, approimately your size. He is currently simply being Gerald, and he's in one of his places. You are the intruder in this arrangement.",
  "Gerald the turkey appears to have eaten something. He seems satisfied, but offers nothing in the way of explanation.",
  "Gerald — large, bronze-feathered, deeply unimpressed — is standing very close to something on the ground. He is not touching it. He is not moving from it.",
];

export class Gerald extends BaseItem {
  public id = ItemKey.Gerald;
  public name = "gerald";
  public isShown = true;
  public value = 0;
  public descriptionIndex = 0;

  public canTake(_gameEngine: GameEngine): boolean {
    return false;
  }

  public take(_gameEngine: GameEngine): string {
    return "You cannot take Gerald. Gerald *can* take things from you. That is the direction this relationship runs.";
  }

  public drop(_gameEngine: GameEngine): string {
    return "You cannot drop Gerald. Gerald drops things on his own schedule.";
  }

  public examine(_gameEngine: GameEngine): string {
    const desc =
      geraldDescriptions[this.descriptionIndex % geraldDescriptions.length];
    this.descriptionIndex++;
    return desc;
  }

  public use(_gameEngine: GameEngine): string {
    return "You attempt to reason with Gerald. Gerald tilts his head. Gerald is not interested in reason. Gerald has a worldview and you are not central to it.";
  }

  public getName(): string {
    return "is Gerald the Gobbler King";
  }

  public getLocationText(): string {
    return "A large tom turkey stands here. His name is Gerald. He was here first.";
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map<
    string,
    (gameEngine: GameEngine) => string
  >([
    [
      "give crackers to",
      (gameEngine: GameEngine) => {
        if (gameEngine.inventoryContains(ItemKey.Crackers)) {
          gameEngine.removeFromInventory(ItemKey.Crackers);
          gameEngine.currentLocation.removeItem(ItemKey.Gerald);
          gameEngine.questTracker.complete(
            Constants.Quests.GeraldDefeated,
            gameEngine,
          );
          return "You open the crackers and toss them. Gerald focuses his full attention onto them with startling speed. He is briefly occupied with vigorous pecking, the stops abruptly. He wanders off, seemingly satisfied with what was eaten. The path is clear.";
        }
        return "You don't have any crackers.";
      },
    ],
    [
      "show jigger to",
      (gameEngine: GameEngine) => {
        if (gameEngine.inventoryContains(ItemKey.BrokenJigger)) {
          gameEngine.currentLocation.removeItem(ItemKey.Gerald);
          gameEngine.questTracker.complete(
            Constants.Quests.GeraldDefeated,
            gameEngine,
          );
          return "You hold up the brass jigger. It catches the light. Gerald's pupils dilate. He lunges for it, misses, and vanishes into the oaks at high speed, still chasing the glint. The path is clear.";
        }
        return "You don't have anything shiny to show him.";
      },
    ],
  ]);
}
