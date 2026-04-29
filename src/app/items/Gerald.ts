import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

const geraldDescriptions = [
  "Gerald is a large tom turkey, and he is standing in the middle of the path. He looks at you with one eye, then the other. He does not move. He makes a sound like a rusty gate.",
  "Gerald — a full-grown tom turkey, for the record — has arrived and is now patrolling the area with the grim efficiency of a regional manager doing a surprise audit.",
  "Gerald is here. A turkey. Your size, approximately. He is simply being Gerald, in his place. You are the intruder in this arrangement.",
  "Gerald the turkey appears to have eaten something. He seems satisfied. He does not explain.",
  "Gerald — large, bronze-feathered, deeply unimpressed — is standing very close to something of yours. He is not touching it. He is thinking about touching it.",
];

export class Gerald extends BaseItem {
  public id = ItemKey.Gerald;
  public name = "gerald";
  public isShown = true;
  public value = 0;
  private descriptionIndex = 0;

  public canTake(_gameEngine: GameEngine): boolean {
    return false;
  }

  public take(_gameEngine: GameEngine): string {
    return "You cannot take Gerald. Gerald takes things from you. That is the direction this relationship runs.";
  }

  public drop(_gameEngine: GameEngine): string {
    return "You cannot drop Gerald. Gerald drops things on his own schedule.";
  }

  public examine(_gameEngine: GameEngine): string {
    const desc = geraldDescriptions[this.descriptionIndex % geraldDescriptions.length];
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
    return "Gerald the Gobbler King is here.";
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map<string, (gameEngine: GameEngine) => string>([
    [
      "give crackers to",
      (gameEngine: GameEngine) => {
        if (gameEngine.inventoryContains(ItemKey.Crackers)) {
          gameEngine.removeFromInventory(ItemKey.Crackers);
          gameEngine.currentLocation.removeItem(ItemKey.Gerald);
          gameEngine.score += 5;
          return "You open the crackers and toss them. Gerald materializes his full attention onto them with startling speed. He is occupied. He wanders off, eating, satisfied. The path is clear.";
        }
        return "You don't have any crackers.";
      },
    ],
    [
      "show jigger to",
      (gameEngine: GameEngine) => {
        if (gameEngine.inventoryContains(ItemKey.BrokenJigger)) {
          gameEngine.currentLocation.removeItem(ItemKey.Gerald);
          gameEngine.score += 5;
          return "You hold up the brass jigger. It catches the light. Gerald's pupils dilate. He lunges for it, misses, and vanishes into the oaks at high speed, still chasing the glint. The path is clear.";
        }
        return "You don't have anything shiny to show him.";
      },
    ],
  ]);
}
