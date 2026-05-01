import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { ItemKey } from "../items/ItemKey";

export class GeraldTree extends BaseLocation {
  public id = LocationKey.GeraldTree;
  public title = "Gerald's Tree";

  public description(): string {
    let s =
      "You are standing beside a massive gnarled live oak at the edge of the field. It has claimed this corner of the property with the patient authority of something that was here before the roads and will be here long after the fences. Claw marks scored into the bark — seven notches on the east face, three on the south side. Gerald keeps his own tally.";

    const hasCan = this.hasItem(ItemKey.EmptyBeerCan);
    const hasGerald = this.hasItem(ItemKey.Gerald);

    if (hasCan && hasGerald) {
      s +=
        " Something has been left at the base of the tree — and Gerald is standing directly over it. He is not moving from it.";
    } else if (hasCan) {
      s += " Something has been left at the base of the tree. Deliberately.";
    }

    s +=
      "\n\nThe north field is to the west. The parking area is to the northwest.";
    return s + this.appendItems();
  }
}
