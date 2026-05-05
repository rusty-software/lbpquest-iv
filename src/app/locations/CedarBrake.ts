import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class CedarBrake extends BaseLocation {
  public id = LocationKey.CedarBrake;
  public title = "Cedar Brake";
  public isDark = true;
  public descriptionText =
    "You push into the cedar thicket at the south end of the meadow. It is dense, fragrant, and dim even in broad daylight (which this evening does not provide). Branches close in overhead and the ground softens underfoot with decades of cedar duff that mutes your footsteps in a way that feels less peaceful than it should. Something has been nesting here — the grass is pressed flat in an oval, roughly the size of something you'd rather not think about too specifically.\n\nThe fire pit is to the north. The deer blind is to the south.";
}
