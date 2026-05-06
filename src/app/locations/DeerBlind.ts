import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class DeerBlind extends BaseLocation {
  public id = LocationKey.DeerBlind;
  public title = "Deer Blind";
  public isDark = true;
  public descriptionText =
    "You are inside a small, ancient, wooden hunting blind near the southern edge of the property. It smells of doe urine and old coffee. Inside you find a broken folding stool along with a rifle rest (with no rifle). Above the door frame, someone has stenciled something in fading paint, but it's hard to make out without a closer look. A laminated sign is taped to the interior wall: PATIENCE IS A VIRTUE — ALSO BRING SNACKS. On the back wall, above the rifle rest, someone has scratched something into the cedar planks, although the markings are unclear. From the shooting window, looking north, you have a clear view of the south meadow and, distantly, the pool deck lights.\n\nThe cedar brake is to the north.";
}
