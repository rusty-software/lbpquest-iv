import { ItemKey } from "../items/ItemKey";
import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class Mudroom extends BaseLocation {
  public id = LocationKey.Mudroom;
  public title = "Mudroom";

  public description(): string {
    const tallboyPresent = this.items.some(
      (i) => i.id === ItemKey.LoneStarTallboy && i.isShown,
    );
    const tallboySentence = tallboyPresent
      ? " A single Lone Star tallboy sits on top of the dryer — the last one Gerald missed, apparently."
      : "";
    let itemText = "";
    this.items
      .filter((i) => i.isShown && i.id !== ItemKey.LoneStarTallboy)
      .forEach((i) => (itemText += `\n\n${i.getLocationText()}`));
    return `You are in a utilitarian room at the back of the kitchen. A boot rack holds four pairs of boots, none of them yours. Coat hooks line the wall beside it. A washer and dryer sit stacked in the corner.${tallboySentence} A back door leads out to the oak grove to the southwest.\n\nThe kitchen is to the south. The oak grove is to the southwest.${itemText}`;
  }
}
