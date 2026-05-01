import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class Kitchen extends BaseLocation {
  public id = LocationKey.Kitchen;
  public title = "Kitchen";
  public descriptionText =
    "You find yourself in a modern kitchen that somehow fits inside a barndominium. A butcher block island anchors the center, with stainless appliances and open shelving lined with mason jars of dry goods. A row of hooks near the back door holds various keys, though none are for anything you'd recognize. A whiteboard on the fridge, written in marker: \"Gerald got the last two beers. Check the whiskey room.\"\n\nThe Great Room is to the south. The mudroom is to the north.";
}
