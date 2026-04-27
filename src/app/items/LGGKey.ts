import { GameEngine } from "../GameEngine";
import { Direction } from "../Direction";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { LocationKey } from "../locations";

export class LGGKey extends BaseItem {
  public id = ItemKey.LGGKey;
  public name = "key";
  public isShown = true;
  public value = 10;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "A small key on a leather fob. The fob is stamped with the letters LGG in a neat serif font. It smells faintly of cedar.";
  }

  public use(gameEngine: GameEngine): string {
    if (gameEngine.currentLocation.id === LocationKey.LGGExterior) {
      const lggExterior = gameEngine.currentLocation;
      const lggRoom = gameEngine.getLocation(LocationKey.LGGRoom);
      if (!lggExterior.neighbors.has("n" as Direction)) {
        gameEngine.score += 10;
      }
      lggExterior.neighbors.set("n" as Direction, lggRoom);
      lggRoom.neighbors.set("s" as Direction, lggExterior);
      return "The key slides in smoothly. A small sound, like a held breath released. The door swings open on cedar-scented air, and pink neon light spills out from inside.\n\nYou can go north to enter.";
    }
    return "You're not sure where to use this key right now.";
  }
}
