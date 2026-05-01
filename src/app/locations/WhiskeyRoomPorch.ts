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
      `You are on a narrow covered stoop at the front of the cabin, one small step up from the trail. A boot scraper sits beside the door. A mounted antler to the right of the door frame — two tines, modest, ornamental. A single Edison bulb overhead is on a motion sensor.\n\n${doorStatus}\n\nThe trail is to the east.` +
      this.appendItems()
    );
  }
}
