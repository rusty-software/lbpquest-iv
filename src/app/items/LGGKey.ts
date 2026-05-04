import { Constants } from "../Constants";
import { GameEngine } from "../GameEngine";
import { Direction } from "../Direction";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { LocationKey } from "../locations";

export class LGGKey extends BaseItem {
  public id = ItemKey.LGGKey;
  public name = "key";
  public isShown = false;
  public value = 20;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public take(_gameEngine: GameEngine): string {
    this.taken = true;
    return "You take the key. The leather is cool and a little gritty. LGG... I wonder what that stands for...?";
  }

  public examine(_gameEngine: GameEngine): string {
    return "A small key on a leather fob. The fob is stamped with the letters LGG in a neat serif font.";
  }

  public getLocationText(): string {
    return "A small key on a leather fob stamped LGG is here.";
  }

  public use(gameEngine: GameEngine): string {
    if (gameEngine.currentLocation.id === LocationKey.LGGExterior) {
      const lggExterior = gameEngine.currentLocation;
      const lggRoom = gameEngine.getLocation(LocationKey.LGGRoom);
      gameEngine.questTracker.complete(
        Constants.Quests.LGGUnlocked,
        gameEngine,
      );
      lggExterior.neighbors.set("n" as Direction, lggRoom);
      lggRoom.neighbors.set("s" as Direction, lggExterior);
      return "The key slides in smoothly. A small sound, like a held breath released. The door swings open on cedar-scented air, and pink neon light spills out from inside.\n\nYou can go north to enter.";
    }
    return "You're not sure where to use this key right now, but you know it's not right here.";
  }
}
