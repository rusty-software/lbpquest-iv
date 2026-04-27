import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class VodkaRoom extends BaseLocation {
  public id = LocationKey.VodkaRoom;
  public title = "The Vodka Room";

  public description(): string {
    return (
      "A small, dark anteroom. The only light is a neon sign on the wall: THE VODKA ROOM, in cold purple-white. Wire industrial shelving lines three walls, stocked with an eclectic mix of flavored vodkas, mixers, and one extremely out-of-place bottle of Kahlua. A purple fur rug on the floor. Two camp chairs, one knocked sideways.\n\n" +
      "Someone was here recently. Empty glasses. A card game left mid-hand — someone was winning. The Kahlua bottle has been moved from the shelf and placed in a chair with apparent deliberateness.\n\n" +
      "On the side table: a short note in marker. WENT TO THE CABIN. FOLLOW THE STRING LIGHTS.\n\n" +
      "The LGG room is to the south." +
      this.appendItems()
    );
  }
}
