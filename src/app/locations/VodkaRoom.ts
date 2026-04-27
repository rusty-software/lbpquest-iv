import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class VodkaRoom extends BaseLocation {
  public id = LocationKey.VodkaRoom;
  public title = "The Vodka Room";

  public description(): string {
    return (
      "A small, dark anteroom. The only light is a neon sign on the wall: THE VODKA ROOM, in cold purple-white. Wire industrial shelving lines three walls, stocked with an eclectic mix of flavored vodkas, mixers, and one extremely out-of-place bottle of Kahlua. A purple fur rug on the floor. A single camp chair.\n\n" +
      "And in the camp chair: your friends. All of them. Someone is asleep. Someone else is playing a card game against the Kahlua bottle, which is apparently winning.\n\n" +
      '"Oh good," someone says without looking up. "You made it. Grab a chair. We were about to start the next round."\n\n' +
      "** You have found your friends. The quest is complete. **\n\n" +
      "The LGG room is to the south."
    );
  }
}
