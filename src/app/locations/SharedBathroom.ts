import { ItemKey } from "../items/ItemKey";
import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class SharedBathroom extends BaseLocation {
  public id = LocationKey.SharedBathroom;
  public title = "Shared Bathroom";

  public description(): string {
    const novelPresent = this.items.some(
      (i) => i.id === ItemKey.WesternNovel && i.isShown,
    );
    const novelSentence = novelPresent
      ? " Someone left a paperback western novel on the back of the toilet. The cover shows a cowboy silhouetted against a sunset and the title: NO QUARTER GIVEN. The bookmark is at page 12. It has always been at page 12."
      : "";
    let itemText = "";
    this.items
      .filter((i) => i.isShown && i.id !== ItemKey.WesternNovel)
      .forEach((i) => (itemText += `\n\n${i.getLocationText()}`));
    return `You are in the shared bathroom off the hallway, used by the bunk room and bedroom three.${novelSentence}\n\nThe hallway is to the northwest.${itemText}`;
  }
}
