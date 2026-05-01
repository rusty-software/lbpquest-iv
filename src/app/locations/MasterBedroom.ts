import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class MasterBedroom extends BaseLocation {
  public id = LocationKey.MasterBedroom;
  public title = "Master Bedroom";
  public descriptionText =
    "You are in the nicest room in the Lodge. A king bed dressed in a linen duvet takes up most of the space, with a dresser against one wall. Four framed prints hang on the walls — two highland cows (portrait-style, shaggy, majestic against blank backgrounds), one tight closeup of a bluebonnet cluster, one abstract that might be a creek or might be clouds or might be both. There is also a medium-sized child's pop-up tent in the corner of the room, fully assembled. Its presence is not explained.\n\nThe hallway is to the west. The master bathroom is to the east.";
}
