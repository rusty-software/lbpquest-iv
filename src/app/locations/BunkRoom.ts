import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class BunkRoom extends BaseLocation {
  public id = LocationKey.BunkRoom;
  public title = "Bunk Room";
  public descriptionText =
    "You are in the bunk room. Three sets of bunk beds fill most of the space, each dressed in cowboy-print throw blankets. A bedside table holds a cactus-shaped nightlight. It is green, squat, and vaguely cheerful. Above one of the upper bunks hangs a framed print of a longhorn steer standing in a field looking approximately offended.\n\nThe hallway is to the south.";
}
