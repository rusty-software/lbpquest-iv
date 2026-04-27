import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class DeerBlind extends BaseLocation {
  public id = LocationKey.DeerBlind;
  public title = "Deer Blind";
  public isDark = true;
  public descriptionText =
    "A small wooden hunting blind at the southern edge of the property, barely visible from outside. It smells of doe urine and old coffee. Inside: a folding stool, a rifle rest with no rifle, and a pair of binoculars on a hook. A laminated sign is taped to the interior wall: PATIENCE IS A VIRTUE — ALSO BRING SNACKS. From the shooting window, looking north, you have a clear view of the south meadow and, distantly, the pool deck lights.\n\nThe cedar brake is to the north.";
}
