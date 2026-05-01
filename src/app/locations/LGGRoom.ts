import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class LGGRoom extends BaseLocation {
  public id = LocationKey.LGGRoom;
  public title = "LGG Room";
  public descriptionText =
    "You step inside. The floor is green astroturf carpet. Three gilt-framed mirrors at staggered heights line one wall. A cowhide rug anchors the center, flanked by two white tufted ottoman poufs and a pair of deep green velvet chairs. Botanical art prints fill the remaining wall space — ferns, wildflowers, a cactus silhouette. A half-empty bottle of rosé sits on a side table with two clean glasses, as if someone meant to come back. The room smells like cedar and a very specific candle you couldn't name but would recognize.\n\nYou are standing in the back of a corrugated metal outbuilding at a ranch in Johnson City, Texas.\n\nOn the back wall: a door painted the same green as the velvet chairs, nearly invisible unless you're looking for it. The handle is a small antler tip.\n\nThe exterior is back to the south. The hidden door leads north.";
}
