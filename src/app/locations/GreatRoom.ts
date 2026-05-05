import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class GreatRoom extends BaseLocation {
  public id = LocationKey.GreatRoom;
  public title = "Great Room";

  public description(): string {
    const visitCount = this.visitedLocationCount;

    let s =
      "You are in the heart of the Lodge, and it is not subtle. A cathedral ceiling of exposed steel trusses soars overhead. The far wall is dominated by a massive stone fireplace, and above it, staring directly at you, is an enormous mounted whitetail buck with a twelve-point rack. Two more mounted deer heads flank it at different heights. Along the opposite wall: a long farmhouse dining table that easily seats fourteen. The surfaces are loaded with antler candleholders, trinkets, and a mounted fish or two. Every wall has something looking at you.";

    if (visitCount < 5) {
      s +=
        '\n\nThe great buck fixes you with one glass eye, then speaks.\n\n"You. Yes. I\'ll be brief. Your companions have gone to the innermost room — through the neon, into the dark, to the cabin at the end of the trail. The way is sealed by a four-digit code. The numbers are written in the ranch itself. Look at what has been scored, scheduled, measured, and labeled. The order of those numbers waits for you somewhere in the neon."';
    } else if (visitCount < 15) {
      s +=
        '\n\nThe great buck regards you, then says, "Still ranging. Good. Four numbers, four places on this property — court, shed, tub, and blind. Their order is in the neon room. Seek it out if you\'ve not been there yet."';
    } else {
      s +=
        '\n\nThe great buck dips slightly. "You\'ve covered the ground. The digits and their order — you have them, or you know where they are. The cabin waits."';
    }

    s +=
      "\n\nTo the west is the front porch. To the north is the kitchen. To the east is the hallway. The mud room is to the south.";
    s += super.appendItems();
    return s;
  }

  private get visitedLocationCount(): number {
    return this.gameEngine?.visitedLocations.size ?? 0;
  }
}
