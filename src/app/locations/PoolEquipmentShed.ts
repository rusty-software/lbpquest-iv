import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class PoolEquipmentShed extends BaseLocation {
  public id = LocationKey.PoolEquipmentShed;
  public title = "Pool Equipment Shed";
  public isDark = true;
  public descriptionText =
    "A corrugated metal utility shed tucked against the sports court fence line. Pump equipment, chemical jugs, a length of backwash hose coiled like a sleeping thing. A small shelf holds a bottle of SPF 50 sunscreen and a lost pair of prescription sunglasses (someone needs these badly). A laminated pool schedule is taped to the wall.\n\nThe sports court is to the west.";
}
