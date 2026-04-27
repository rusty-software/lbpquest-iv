import { GameEngine } from "../GameEngine";
import { Direction } from "../Direction";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { LocationKey } from "../locations";

export class WhiskeyKey extends BaseItem {
  public id = ItemKey.WhiskeyKey;
  public name = "cabin key";
  public isShown = true;
  public value = 0;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "A small brass key on a round leather fob. The fob is embossed with a strutting turkey — crude but unmistakable. The key has a warm, slightly greasy feel, as if it has been held many times.";
  }

  public use(gameEngine: GameEngine): string {
    if (gameEngine.currentLocation.id === LocationKey.WhiskeyRoomPorch) {
      const porch = gameEngine.currentLocation;
      const whiskeyRoom = gameEngine.getLocation(LocationKey.WhiskeyRoom);
      porch.neighbors.set("w" as Direction, whiskeyRoom);
      whiskeyRoom.neighbors.set("e" as Direction, porch);
      return "The key fits. A firm turn, a soft click, and the door swings open on cedar and woodsmoke. Warm amber light spills out from inside.\n\nYou can go west to enter.";
    }
    return "You're not sure where to use this key right now.";
  }

  public getLocationText(): string {
    return "A small brass key on a turkey-embossed fob rests on the side table.";
  }
}
