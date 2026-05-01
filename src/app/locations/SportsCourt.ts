import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class SportsCourt extends BaseLocation {
  public id = LocationKey.SportsCourt;
  public title = "Sports Court";
  public descriptionText =
    "You are at the sports court — a full pickleball surface striped in blue, enclosed by black netting and a tall fence. A basketball hoop stands at the far end on a tall pole with its own floodlight, already on though it is not yet necessary. Near the gate entrance hangs a small whiteboard scoreboard that reads GERALD: 3 / HUMANS: 0. One ball sits at the far baseline, where it has apparently always been. Next to the scoreboard hangs a small brass bell on a cord.\n\nThe pool deck is to the south. The pool equipment shed is to the east.";
}
