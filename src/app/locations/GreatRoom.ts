import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class GreatRoom extends BaseLocation {
  public id = LocationKey.GreatRoom;
  public title = "Great Room";

  public description(): string {
    const visitCount = this.visitedLocationCount;

    let s =
      "This is the heart of the Lodge, and it is not subtle. A cathedral ceiling of exposed steel trusses soars overhead. The far wall is dominated by a massive stone fireplace, and above it — staring directly at you — is an enormous mounted whitetail buck with a twelve-point rack. Two more mounted deer heads flank it at different heights. Along the opposite wall: a long farmhouse dining table that seats fourteen, easy. The surfaces are loaded with antler candleholders, trinkets, and a mounted fish or two. Every wall has something looking at you.";

    if (visitCount < 5) {
      s +=
        "\n\nThe great buck swivels its mounted head in your direction. \"You. Yes, you. Don't walk past me. I, Lord of the Oakridge Stags, address you. Your companions are in the innermost room — beyond the neon, through the hidden door. The path there is shut. The Lord of the Dark Interior holds the key. Find him in the building that smells of oak and barrel, to the west in the trees. Begin there.\"";
    } else if (visitCount < 15) {
      s +=
        "\n\nThe great buck regards you steadily. \"You venture forth. The Lord of the Dark Interior awaits in the whiskey room. He has what you seek.\"";
    } else {
      s +=
        "\n\nThe great buck dips slightly. \"You have walked these grounds thoroughly. The way to the neon room lies open to those who seek it. Well done.\"";
    }

    s +=
      "\n\nTo the west is the front porch. To the north is the kitchen. To the east is the hallway. The back porch is to the south.";
    s += super.appendItems();
    return s;
  }

  private get visitedLocationCount(): number {
    return this.gameEngine?.visitedLocations.size ?? 0;
  }
}
