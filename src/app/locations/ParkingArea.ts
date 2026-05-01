import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class ParkingArea extends BaseLocation {
  public id = LocationKey.ParkingArea;
  public title = "Parking Area";
  public descriptionText =
    "You are standing in the gravel loop in front of the Lodge, with room for a dozen vehicles. A security camera on a cedar post watches the whole thing with the kind of blank dedication that security cameras have. The front face of the Lodge — dark green corrugated steel, a deep covered porch, wood-trimmed windows — is immediately to the north. A gravel path curves east around the building.\n\nThe Lodge front porch is to the north. The north field is to the south. Gerald's tree is to the southeast.";
}
