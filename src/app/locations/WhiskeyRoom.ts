import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class WhiskeyRoom extends BaseLocation {
  public id = LocationKey.WhiskeyRoom;
  public title = "Whiskey Room";

  public description(): string {
    let s =
      "Dark inside, in a pleasant way. The walls are knotty pine stained almost black with age and smoke. Four whitetail deer heads are mounted in a row above a long wall of dark shelving lined with Texas whiskey — Garrison Brothers, Treaty Oak, one unopened fifth of Blanton's, two bottles of something with a handwritten label. The centerpiece is a long bar table built on two actual whiskey barrels, the tops inlaid with Jack Daniel's medallions. A hammered copper sink in the corner. Loose antlers on a lower shelf. An antler chandelier with Edison bulbs overhead.\n\nOn the bar top: antler coasters, an empty whiskey glass, a brass mechanical bar jigger that appears to be broken, and a key on a leather fob stamped with the letters LGG.";

    s +=
      "\n\nThe largest of the four heads — a buck with a broken-off tine — regards you from above the shelving.\n\n\"You found the Whiskey Room. Not many do on the first night. I am Lord of the Dark Interior. The key before you opens the door to the neon room, but she does not admit just anyone. The Lord of the Stags has spoken to you of what's needed. Now go.\"";

    s += "\n\nThe porch is to the east.";
    s += super.appendItems();
    return s;
  }
}
