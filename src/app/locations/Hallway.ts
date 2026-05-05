import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class Hallway extends BaseLocation {
  public id = LocationKey.Hallway;
  public title = "Hallway";
  public descriptionText =
    "You are in a short paneled hallway off the Great Room, connecting the sleeping rooms. A framed print of a highland cow hangs on one wall — a full portrait, brown and shaggy and vaguely offended by the entire arrangement. On the opposite wall is a mounting bracket, the kind meant to hold a taxidermied bird or a rifle. It holds a lone stick. Just a stick. No placard. No explanation. The bracket has not accepted this loss.\n\nThe Great Room is to the west. The bunk room is to the north. The master bedroom is to the east. Bedroom three is to the south. The shared bathroom is to the southeast.";
}
