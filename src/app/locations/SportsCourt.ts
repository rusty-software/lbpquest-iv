import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class SportsCourt extends BaseLocation {
  public id = LocationKey.SportsCourt;
  public title = "Sports Court";
  public descriptionText =
    "A full pickleball court striped on a blue multi-sport surface, enclosed by black netting and a tall fence. A basketball hoop stands at the far end on a tall pole with its own floodlight. The light is already on, though it is not yet necessary. On a hook near the gate entrance: a small whiteboard scoreboard. It reads GERALD: 3 / HUMANS: 0. One ball is at the far baseline, where it has apparently always been. Next to the scoreboard, a small brass bell on a cord.\n\nThe pool deck is to the south. The pool equipment shed is to the east.";
}
