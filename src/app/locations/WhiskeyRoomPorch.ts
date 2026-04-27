import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { Direction } from "../Direction";

export class WhiskeyRoomPorch extends BaseLocation {
  public id = LocationKey.WhiskeyRoomPorch;
  public title = "Whiskey Room Porch";

  public description(): string {
    const doorStatus = this.neighbors.has("w" as Direction)
      ? "The door is unlocked. The whiskey room is through the door to the west."
      : "The door is locked. A small brass plate where the handle should be. No keyhole visible from the outside.";

    return (
      `A small step and a narrow covered stoop at the front of the cabin. A boot scraper beside the door. A mounted antler to the right of the door frame — two tines, modest, ornamental. A single Edison bulb overhead on a motion sensor.\n\n${doorStatus}\n\nThe trail is to the east.` +
      this.appendItems()
    );
  }
}
