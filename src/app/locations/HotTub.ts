import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class HotTub extends BaseLocation {
  public id = LocationKey.HotTub;
  public title = "Hot Tub";
  public descriptionText =
    "You climb up to the elevated circular hot tub — its own sovereign domain. The jets are running, the water churning, the lights a steady purple. It smells of chlorine and cedar and the faint ghost of someone's coconut sunscreen. From up here on the raised deck, looking back toward the Lodge, you can see the rocking chairs on the back porch clearly through the tree canopy. There is already a rubber duck in the tub. This one is not wearing a hat. It has less charisma than the one in the master bathroom, but it has made peace with this.\n\nThe pool deck is to the west.";
}
