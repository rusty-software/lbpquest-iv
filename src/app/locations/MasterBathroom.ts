import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class MasterBathroom extends BaseLocation {
  public id = LocationKey.MasterBathroom;
  public title = "Master Bathroom";
  public descriptionText =
    "An en-suite bathroom with a walk-in shower tiled in river rock. Clean, modern. One hand towel hanging at a slightly aggressive angle, as if placed that way on purpose.\n\nThe master bedroom is to the west.";
}
