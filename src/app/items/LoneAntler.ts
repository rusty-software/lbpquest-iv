import { Constants } from "../Constants";
import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class LoneAntler extends BaseItem {
  public id = ItemKey.LoneAntler;
  public name = "antler";
  public isShown = true;
  public value = 0;

  public canTake(_gameEngine: GameEngine): boolean {
    return false;
  }

  public take(_gameEngine: GameEngine): string {
    return "It's bolted to the cedar. You consider it for longer than is reasonable, finally leaving it.";
  }

  public examine(gameEngine: GameEngine): string {
    const isFirst = gameEngine.questTracker.complete(
      Constants.Quests.AntlerExamined,
      gameEngine,
    );
    if (isFirst) {
      return "A single antler, sporting two tines, mounted beside the whiskey room porch door. You lean in and notice a faint carving in the base: a small oak leaf, barely a centimeter wide, pressed into the bone with something thin and careful. Someone left their mark here. It has been here long enough that it no longer draws comment from whoever comes and goes.";
    }
    return "A single antler, two tines, mounted beside the whiskey room porch door. The oak leaf carving in the base is there if you know to look for it.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You try to figure out how to use the antler. The antler does not condone your antics. You cease your attempts to use it.";
  }
}
