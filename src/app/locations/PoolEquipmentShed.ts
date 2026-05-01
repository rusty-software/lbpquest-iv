import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class PoolEquipmentShed extends BaseLocation {
  public id = LocationKey.PoolEquipmentShed;
  public title = "Pool Equipment Shed";
  public isDark = true;
  public descriptionText =
    "You are inside a corrugated metal utility shed tucked against the sports court fence line. Pump equipment, chemical jugs, and a length of backwash hose coiled like a sleeping thing take up most of the floor. A small shelf holds a bottle of SPF 50 sunscreen and a lost pair of prescription sunglasses — whoever they belong to is going to be squinting for the rest of the weekend. A green propane fuel canister sits on the shelf beside them. A laminated pool schedule is taped to the wall.\n\nThe sports court is to the west.";
}
