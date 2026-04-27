import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class SharedBathroom extends BaseLocation {
  public id = LocationKey.SharedBathroom;
  public title = "Shared Bathroom";
  public descriptionText =
    "A full bathroom off the hallway, shared between the bunk room and bedroom three. Someone left a paperback western novel on the back of the toilet. The cover shows a cowboy silhouetted against a sunset and the title: NO QUARTER GIVEN. The bookmark is at page 12. It has always been at page 12.\n\nThe hallway is accessible to the west.";
}
