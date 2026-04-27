import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class HotTub extends BaseLocation {
  public id = LocationKey.HotTub;
  public title = "Hot Tub";
  public descriptionText =
    "The elevated circular hot tub is its own sovereign domain. Jets running, water churning, lit in purple. It smells of chlorine and cedar and the faint ghost of someone's coconut sunscreen. From up here on the raised deck, looking back toward the Lodge, you can see the rocking chairs on the back porch clearly through the tree canopy. There is already a rubber duck in the tub. This one is not wearing a hat. It has less charisma than the one in the master bathroom, but it has made peace with this.\n\nThe pool deck is to the west.";
}
