import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class Mudroom extends BaseLocation {
  public id = LocationKey.Mudroom;
  public title = "Mudroom";
  public descriptionText =
    "A utilitarian room at the back of the kitchen. Boot rack with four pairs of boots, none of them yours. Coat hooks. A washer and dryer stacked in the corner. A single Lone Star tallboy sitting on top of the dryer — the last one Gerald missed, apparently. A back door leads north to the oak grove.\n\nThe kitchen is to the south. The oak grove is to the north.";
}
