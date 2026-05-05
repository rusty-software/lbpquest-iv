import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { ItemKey } from "../items/ItemKey";

export class VodkaRoom extends BaseLocation {
  public id = LocationKey.VodkaRoom;
  public title = "The Vodka Room";

  public description(): string {
    const kahluaPresent = this.items.some(
      (i) => i.id === ItemKey.Kahlua && i.isShown,
    );
    const shelfKahlua = kahluaPresent
      ? ", and one deeply out-of-place bottle of Kahlúa"
      : "";
    const chairKahlua = kahluaPresent
      ? " The Kahlúa has been moved from the shelf to the seat of one of the camp chairs, with a deliberateness that suggests whoever placed it had reasons."
      : "";

    const noteText = this.hasItem(ItemKey.OrderNote)
      ? "On the side table: a folded cabin note in black marker. Someone wrote in a hurry."
      : "The side table is empty now.";

    let itemText = "";
    this.items
      .filter((i) => i.isShown && i.id !== ItemKey.Kahlua)
      .forEach((i) => (itemText += `\n\n${i.getLocationText()}`));

    return (
      `You enter and the neon says THE VODKA ROOM. The light is cold purple-white — the only light in here, which is either deliberate or nobody thought to put in a window. Industrial wire shelving covers three walls, lined with flavored vodkas and mixers${shelfKahlua}. A purple fur rug covers the floor. Two camp chairs face the center, one knocked sideways.\n\n` +
      `Someone was here recently... You see empty glasses and a card game left mid-hand — someone was winning and clearly not worried about it.${chairKahlua}\n\n` +
      noteText +
      "\n\nThe LGG room is to the south." +
      itemText
    );
  }
}
