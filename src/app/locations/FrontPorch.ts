import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class FrontPorch extends BaseLocation {
  public id = LocationKey.FrontPorch;
  public title = "Front Porch";
  public descriptionText =
    "You are on a wide covered porch spanning the full front of the Lodge. Cedar posts support a wood-planked ceiling overhead. A welcome mat says nothing in particular. Two rocking chairs are angled toward the driveway. Through the glass-paned front door the Great Room stretches back into the building, dark and large and full of things looking at you.\n\nThe Great Room is to the east through the front door. The parking area is to the south.";
}
