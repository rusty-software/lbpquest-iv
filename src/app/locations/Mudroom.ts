import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class Mudroom extends BaseLocation {
  public id = LocationKey.Mudroom;
  public title = "Mudroom";
  public descriptionText =
    "You are in a utilitarian room at the back of the kitchen. A boot rack holds four pairs of boots, none of them yours. Coat hooks line the wall beside it. A washer and dryer sit stacked in the corner. A single Lone Star tallboy sits on top of the dryer — the last one Gerald missed, apparently. A back door leads out to the oak grove to the southwest.\n\nThe kitchen is to the south. The oak grove is to the southwest.";
}
