import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { Direction } from "../Direction";

export class LGGExterior extends BaseLocation {
  public id = LocationKey.LGGExterior;
  public title = "LGG Exterior";

  public description(): string {
    const doorStatus = this.neighbors.has("n" as Direction)
      ? "The door is unlocked. The LGG room is to the north."
      : "The door to the LGG room is here — but it is locked.";

    return (
      `You arrive at a corrugated metal building, painted a faded white, sitting back from the path with a certain studied composure. A cedar-framed open-air lean-to runs along the front, string lights strung overhead, a rough-cut bar shelf along the railing. Through a smudged window, a neon sign glows pink and green: LET'S GO GIRLS. A rooster weathervane on the peak turns slowly in a wind you cannot feel. On the door: a small hand-lettered sign — SKIP'S SHACK / Members Only.\n\nThe neon provides enough light to see by even at night. The oak grove is to the southeast. ${doorStatus}` +
      this.appendItems()
    );
  }
}
