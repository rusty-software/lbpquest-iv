import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class Kitchen extends BaseLocation {
  public id = LocationKey.Kitchen;
  public title = "Kitchen";
  public descriptionText =
    'You find yourself in a modern kitchen that somehow fits inside a barndominium. A butcher block island anchors the center, and the walls are lined with open shelving and countertops, stainless steel appliances and mason jars sprinkled liberally throughout. A row of hooks near the back door holds various keys, though none are for anything you\'d recognize. A whiteboard hangs on the fridge, with a note written in marker: "Gerald got the last two beers. Check the whiskey room."\n\nThe Great Room is to the south. The mudroom is to the north.';
}
