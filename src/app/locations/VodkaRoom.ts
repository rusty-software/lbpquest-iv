import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { ItemKey } from "../items/ItemKey";

export class VodkaRoom extends BaseLocation {
  public id = LocationKey.VodkaRoom;
  public title = "The Vodka Room";

  public description(): string {
    const noteText = this.hasItem(ItemKey.OrderNote)
      ? "On the side table: a folded cabin note in black marker. Someone wrote in a hurry."
      : "The side table is empty now.";

    return (
      "The neon says THE VODKA ROOM. Cold purple-white. It is the only light in here, which is either deliberate or nobody thought to put in a window. Wire industrial shelving on three walls — flavored vodkas, mixers, one deeply out-of-place bottle of Kahlúa. A purple fur rug. Two camp chairs, one knocked sideways.\n\n" +
      "Someone was here recently. Empty glasses. A card game left mid-hand — someone was winning and clearly not worried about it. The Kahlúa has been moved from the shelf to the seat of one of the camp chairs, with a deliberateness that suggests whoever placed it had reasons.\n\n" +
      noteText +
      "\n\nThe LGG room is to the south." +
      this.appendItems()
    );
  }
}
