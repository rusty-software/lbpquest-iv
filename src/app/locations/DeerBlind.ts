import { ItemKey } from "../items/ItemKey";
import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class DeerBlind extends BaseLocation {
  public id = LocationKey.DeerBlind;
  public title = "Deer Blind";
  public isDark = true;

  public description(): string {
    const binocularsPresent = this.items.some(
      (i) => i.id === ItemKey.Binoculars && i.isShown,
    );
    const binocularsPart = binocularsPresent
      ? ", and a pair of binoculars on a hook"
      : "";
    let itemText = "";
    this.items
      .filter((i) => i.isShown && i.id !== ItemKey.Binoculars)
      .forEach((i) => (itemText += `\n\n${i.getLocationText()}`));
    return `You are inside a small, ancient, wooden hunting blind near the southern edge of the property. It smells of doe urine and old coffee. Inside you find a broken folding stool along with a rifle rest (with no rifle)${binocularsPart}. Above the door frame, someone has stenciled something in fading paint, but it's hard to make out without a closer look. A laminated sign is taped to the interior wall: PATIENCE IS A VIRTUE — ALSO BRING SNACKS. On the back wall, above the rifle rest, someone has scratched something into the cedar planks, although the markings are unclear. From the shooting window, looking north, you have a clear view of the south meadow and, distantly, the pool deck lights.\n\nThe cedar brake is to the north.${itemText}`;
  }
}
