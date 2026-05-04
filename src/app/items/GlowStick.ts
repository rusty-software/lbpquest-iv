import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class GlowStick extends BaseItem {
  public id = ItemKey.GlowStick;
  public name = "glow stick";
  public isShown = false;
  public value = 4;
  public cracked = false;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public take(_gameEngine: GameEngine): string {
    this.taken = true;
    return "You take the glow stick. You are now prepared for a rave, circa 2003.";
  }

  public examine(_gameEngine: GameEngine): string {
    if (this.cracked) {
      return "A cracked green glow stick, bent and activated. It produces a steady, sickly green light — not bright, but enough. It smells faintly chemical.";
    }
    return "A green chemical glow stick, still sealed and inert. Nothing happening yet. Bend it until you hear the inner vial snap and you'll have light — not much light, but enough.";
  }

  public use(_gameEngine: GameEngine): string {
    if (this.cracked) {
      return "The glow stick is already cracked and glowing.";
    }
    if (!this.taken) {
      return "You should take it first.";
    }
    this.cracked = true;
    return "You bend the glow stick until the inner vial snaps. It flares green — a steady, chemical light. Not a flashlight. But enough to walk by.";
  }

  public getLocationText(): string {
    return this.cracked
      ? "A cracked glow stick glows faintly green here."
      : "A green glow stick is here.";
  }

  public getName(): string {
    return "is a glow stick";
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map([
    ["crack", (gameEngine: GameEngine) => this.use(gameEngine)],
    ["activate", (gameEngine: GameEngine) => this.use(gameEngine)],
  ]);
}
