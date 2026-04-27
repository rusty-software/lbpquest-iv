import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class PoolEquipmentShed extends BaseLocation {
  public id = LocationKey.PoolEquipmentShed;
  public title = "Pool Equipment Shed";
  public isDark = true;
  public descriptionText =
    "A corrugated metal utility shed tucked against the sports court fence line. Pump equipment, chemical jugs, a length of backwash hose coiled like a sleeping thing. A small shelf holds a bottle of SPF 50 sunscreen, a lost pair of prescription sunglasses (someone needs these badly), and a handwritten pool schedule taped to the wall. The schedule lists maintenance intervals for each day of the week. Tuesday at 2pm reads: GERALD — UNSUPERVISED SWIM.\n\nThe sports court is to the west.";
}
