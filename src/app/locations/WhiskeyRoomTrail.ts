import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class WhiskeyRoomTrail extends BaseLocation {
  public id = LocationKey.WhiskeyRoomTrail;
  public title = "Whiskey Room Trail";
  public isDark = true;
  public descriptionText =
    "You follow a short path winding west through the oaks along the string lights. Cedar mulch underfoot mutes your steps. The trees get closer together here and the string lights do what they can. The path curves and a dark-stained wood cabin materializes out of the shadows — small, deliberate, cedar and woodsmoke.\n\nThe oak grove is to the east. The whiskey room porch is to the west.";
}
