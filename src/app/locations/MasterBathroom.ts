import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class MasterBathroom extends BaseLocation {
  public id = LocationKey.MasterBathroom;
  public title = "Master Bathroom";
  public descriptionText =
    "An en-suite bathroom with a walk-in shower tiled in river rock. Clean, modern. One hand towel hanging at a slightly aggressive angle, as if placed that way on purpose. On the edge of the tub: a rubber duck wearing a tiny cowboy hat. It stares at you with the confidence of something that has nothing to prove.\n\nThe master bedroom is to the west.";
}
