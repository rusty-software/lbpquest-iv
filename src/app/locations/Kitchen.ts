import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class Kitchen extends BaseLocation {
  public id = LocationKey.Kitchen;
  public title = "Kitchen";
  public descriptionText =
    "A modern kitchen that somehow fits inside a barndominium. Butcher block island, stainless appliances, open shelving with mason jars of dry goods. A row of hooks near the back door holds various keys, though none are for anything you'd recognize. A whiteboard on the fridge, written in marker: \"Gerald got the last two beers. Check the whiskey room.\"\n\nThe Great Room is to the south. The mudroom is to the north.";
}
