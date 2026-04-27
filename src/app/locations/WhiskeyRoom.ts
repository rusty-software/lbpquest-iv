import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class WhiskeyRoom extends BaseLocation {
  public id = LocationKey.WhiskeyRoom;
  public title = "Whiskey Room";

  public description(): string {
    let s =
      "Dark inside, in a pleasant way. The walls are knotty pine stained almost black with age and smoke. Four whitetail deer heads are mounted in a row above a long wall of dark shelving lined with Texas whiskey — Garrison Brothers, Treaty Oak, one unopened fifth of Blanton's, two bottles of something with a handwritten label. The centerpiece is a long bar table built on two actual whiskey barrels, the tops inlaid with Jack Daniel's medallions. A hammered copper sink in the corner. Loose antlers on a lower shelf. An antler chandelier with Edison bulbs overhead.\n\nOn the bar top: antler coasters, an empty whiskey glass, a brass mechanical bar jigger that appears to be broken.";

    s +=
      "\n\nThe largest of the four heads — a buck with a broken-off tine — regards you from above the shelving. He says nothing. He has seen many nights end here. This is simply another one.";

    s +=
      "\n\nAnd here, finally: your friends. Someone is in the corner chair with a whiskey. Someone else is at the bar, attempting to explain a card game to a person who is clearly not listening. They look up when you come in.\n\n\"There you are,\" someone says. \"We've been here for an hour. Grab a glass.\"\n\n** You have found your friends. The quest is complete. **";

    s += "\n\nThe porch is to the east.";
    s += super.appendItems();
    return s;
  }
}
