import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class WhiskeyRoom extends BaseLocation {
  public id = LocationKey.WhiskeyRoom;
  public title = "Whiskey Room";

  public description(): string {
    let s =
      "You step into the whiskey room — dark inside, in a pleasant way. The walls are knotty pine stained almost black with age and smoke. Four whitetail deer heads are mounted in a row above a long wall of dark shelving lined with Texas whiskey — Garrison Brothers, Treaty Oak, two bottles of something with a handwritten label. The centerpiece is a long bar table built on two actual whiskey barrels, the tops inlaid with Jack Daniel's medallions. A hammered copper sink occupies one corner. Loose antlers sit on a lower shelf. An antler chandelier with Edison bulbs hangs overhead.\n\nThe bar top holds antler coasters and an empty whiskey glass.";

    s +=
      "\n\nThe largest of the four heads — a buck with a broken-off tine — regards you from above the shelving. He says nothing. He has seen many nights end here. This is simply another one.";

    s += "\n\nThe porch is to the east.";
    return s;
  }
}
