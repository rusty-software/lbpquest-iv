import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class CedarBrake extends BaseLocation {
  public id = LocationKey.CedarBrake;
  public title = "Cedar Brake";
  public isDark = true;
  public descriptionText =
    "The cedar thicket at the south end of the meadow. Dense, fragrant, dim even in full daylight. Branches close in overhead and the ground softens underfoot with decades of cedar duff that mutes your footsteps in a way that feels less peaceful than it should. Something has been nesting here — the grass is pressed flat in an oval, ground-level, roughly the size of something you'd rather not think about too specifically.\n\nThe fire pit is to the north. The deer blind is to the south.";
}
