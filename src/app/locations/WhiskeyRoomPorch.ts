import { GameEngine } from "../GameEngine";
import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { Direction } from "../Direction";

export class WhiskeyRoomPorch extends BaseLocation {
  public id = LocationKey.WhiskeyRoomPorch;
  public title = "Whiskey Room Porch";

  public description(): string {
    const doorStatus = this.neighbors.has("w" as Direction)
      ? "The cabin door is open. The whiskey room is through it to the west."
      : "The cabin door is shut. Beside the handle, flush-mounted into the cedar: a small numeric keypad — digits zero through nine. A small brass plaque is mounted above it.";

    return (
      `You are on a narrow covered stoop at the front of the cabin, one small step up from the trail. A boot scraper sits beside the door. You see a mounted antler to the right of the door frame — two tines, modest, ornamental. A single Edison bulb overhead is on a motion sensor.\n\n${doorStatus}\n\nThe trail is to the east.` +
      this.appendItems()
    );
  }

  private keypadResponse(_gameEngine: GameEngine): string {
    if (this.neighbors.has("w" as Direction)) {
      return "The door is already open.";
    }
    return "A flush-mounted numeric keypad, digits zero through nine, set into the cedar beside the door handle. To enter a code, type ENTER followed by the four digits — for example, ENTER 1234.";
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map([
    ["use keypad", (gameEngine: GameEngine) => this.keypadResponse(gameEngine)],
    ["examine keypad", (gameEngine: GameEngine) => this.keypadResponse(gameEngine)],
    ["examine plaque", (_gameEngine: GameEngine) => "A small brass plaque mounted above the keypad. Engraved in capital letters: OAKRIDGE RANCH — WHISKEY ROOM. Below that, smaller: AUTHORIZED GUESTS ONLY. You are a guest. Whether you are authorized depends on the code."],
  ]);
}
