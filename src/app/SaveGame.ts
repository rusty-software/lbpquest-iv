import { ItemKey } from "./items/ItemKey";
import { LocationKey } from "./locations/LocationKey";

export const SAVE_KEY = "lbpquest_iv_save";

export interface ItemSaveState {
  key: ItemKey;
  taken: boolean;
  isShown: boolean;
  currentLocationKey: LocationKey;
}

export interface SaveData {
  currentLocationKey: LocationKey;
  score: number;
  actionCount: number;
  completedQuests: string[];
  visitedLocations: LocationKey[];
  inventory: ItemKey[];
  itemStates: ItemSaveState[];
  geraldLocationKey: LocationKey;
  geraldKeyTheftDone: boolean;
  geraldPatrolIndex: number;
  lastGeraldMoveAt: number;
  geraldDescriptionIndex: number;
}

export const SaveGame = {
  hasSave(): boolean {
    return localStorage.getItem(SAVE_KEY) !== null;
  },

  write(data: SaveData): void {
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  },

  read(): SaveData | null {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as SaveData;
    } catch {
      return null;
    }
  },
};
