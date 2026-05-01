import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class DeerBlind extends BaseLocation {
  public id = LocationKey.DeerBlind;
  public title = "Deer Blind";
  public isDark = true;
  public descriptionText =
    "You are inside a small wooden hunting blind at the southern edge of the property. It smells of doe urine and old coffee. Inside you find a folding stool, a rifle rest with no rifle, and a pair of binoculars on a hook. Above the door frame, someone has stenciled BLIND NO. 1 in fading paint. It is the only blind on the property. Someone numbered it anyway. A laminated sign is taped to the interior wall: PATIENCE IS A VIRTUE — ALSO BRING SNACKS. On the back wall, above the rifle rest, someone has scratched something into the cedar planks, although the markings are unclear. From the shooting window, looking north, you have a clear view of the south meadow and, distantly, the pool deck lights.\n\nThe cedar brake is to the north.";
}
