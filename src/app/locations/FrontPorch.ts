import { ItemKey } from "../items/ItemKey";
import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class FrontPorch extends BaseLocation {
  public id = LocationKey.FrontPorch;
  public title = "Front Porch";

  public description(): string {
    const binocularsPresent = this.items.some(
      (i) => i.id === ItemKey.Binoculars && i.isShown,
    );
    const binocularsPart = binocularsPresent
      ? " A pair of binoculars rests on the railing."
      : "";

    let itemText = "";
    this.items
      .filter((i) => i.isShown && i.id !== ItemKey.Binoculars)
      .forEach((i) => (itemText += `\n\n${i.getLocationText()}`));

    return `You are on a wide covered porch spanning the full front of the Lodge. Cedar posts support a wood-planked ceiling overhead. A welcome mat says nothing in particular. Two rocking chairs are angled toward the driveway.${binocularsPart} Through the glass-paned front door the Great Room stretches back into the building, dark and large and full of things looking at you.\n\nThe Great Room is to the east through the front door. The parking area is to the south.${itemText}`;
  }
}
