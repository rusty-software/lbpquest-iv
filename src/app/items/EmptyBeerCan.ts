import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { LocationKey } from "../locations";

export class EmptyBeerCan extends BaseItem {
  public id = ItemKey.EmptyBeerCan;
  public name = "beer can";
  public isShown = true;
  public value = 1;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    this.taken = true;
    const geraldTree = gameEngine.getLocation(LocationKey.GeraldTree);
    if (geraldTree.hasItem(ItemKey.LGGKey)) {
      geraldTree.showItem(ItemKey.LGGKey);
    }
    return "Taken.";
  }

  public getLocationText(): string {
    return "An empty Lone Star tallboy beer can is here.";
  }

  public examine(gameEngine: GameEngine): string {
    const geraldTree = gameEngine.getLocation(LocationKey.GeraldTree);
    if (geraldTree.hasItem(ItemKey.LGGKey)) {
      geraldTree.showItem(ItemKey.LGGKey);
      return "An empty Lone Star tallboy. You tilt it — placed deliberately, not dropped. Underneath, pressed flat into the soil: a small key on a leather fob. LGG is stamped into the leather in a neat serif font. Someone left this here. Someone with feathers and no regard for conventional key storage.";
    }
    return "An empty beer can of the Lone Star tallboy variety. It was originally placed at the base of Gerald's Tree with clear intention. Gerald does not drink beer. Someone left this for him. Gerald accepted.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You shake the can. It's empty.";
  }

  public getName(): string {
    return "is an empty beer can";
  }
}
