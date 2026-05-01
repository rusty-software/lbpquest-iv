import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class MasterBathroom extends BaseLocation {
  public id = LocationKey.MasterBathroom;
  public title = "Master Bathroom";
  public descriptionText =
    "You are in the en-suite bathroom, its walk-in shower tiled in river rock. It is clean and modern, with a single hand towel hanging at a slightly aggressive angle, as if placed that way on purpose.\n\nThe master bedroom is to the west.";
}
