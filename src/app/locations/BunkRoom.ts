import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class BunkRoom extends BaseLocation {
  public id = LocationKey.BunkRoom;
  public title = "Bunk Room";
  public descriptionText =
    "Three sets of bunk beds fill most of this room. Cowboy-print throw blankets. A bedside table with a cactus-shaped nightlight plugged into the wall — green, squat, vaguely cheerful. Above one of the upper bunks: a framed print of a longhorn steer standing in a field looking approximately offended (a theme is developing).\n\nThe hallway is to the south.";
}
