import { GameEngine } from "./GameEngine";
import { LocationKey } from "./locations";

export interface Item {
  id: number;
  name: string;
  isShown: boolean;
  value: number;
  taken: boolean;
  currentLocationKey: LocationKey;
  customVerbs: Map<string, (gameEngine: GameEngine) => string>;
  getName(): string;
  getLocationText(): string;
  canTake(gameEngine: GameEngine): boolean;
  take(gameEngine: GameEngine): string;
  drop(gameEngine: GameEngine): string;
  examine(gameEngine: GameEngine): string;
  use(gameEngine: GameEngine): string;
}
