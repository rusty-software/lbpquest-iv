import { Constants } from "../Constants";
import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { LocationKey } from "../locations";

export class StuffedArmadillo extends BaseItem {
  public id = ItemKey.StuffedArmadillo;
  public name = "armadillo";
  public isShown = false;
  public value = 4;

  public canTake(_gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(_gameEngine: GameEngine): string {
    return "A stuffed toy armadillo, well-loved, with a slightly flattened snout from years of deployment in some child's nightly defensive operations. It has button eyes and passes no judgment whatsoever. Its character is unimpeachable.";
  }

  public use(_gameEngine: GameEngine): string {
    return "You hold up the armadillo. It does not appear to do anything. This is fine.";
  }

  private leaveArmadillo(gameEngine: GameEngine): string {
    if (gameEngine.currentLocation.id !== LocationKey.BedroomThree) {
      return "This doesn't feel like the right place for it.";
    }
    if (
      gameEngine.questTracker.isComplete(Constants.Quests.ArmadilloReturned)
    ) {
      return "The armadillo is already home.";
    }
    gameEngine.drop(ItemKey.StuffedArmadillo);
    gameEngine.questTracker.complete(
      Constants.Quests.ArmadilloReturned,
      gameEngine,
    );
    return "You set the armadillo on the bed. It sits there, surveying the room with button-eyed serenity. This is where it belongs. You feel certain of this.";
  }

  private handleArmadillo(gameEngine: GameEngine): string {
    if (!gameEngine.inventoryContains(ItemKey.StuffedArmadillo)) {
      return "You'd need to have it with you first.";
    }
    return this.leaveArmadillo(gameEngine);
  }

  public drop(gameEngine: GameEngine): string {
    return this.leaveArmadillo(gameEngine);
  }

  public customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map(
    [
      ["hang", (gameEngine: GameEngine) => this.handleArmadillo(gameEngine)],
      ["leave", (gameEngine: GameEngine) => this.handleArmadillo(gameEngine)],
      ["place", (gameEngine: GameEngine) => this.handleArmadillo(gameEngine)],
      ["put", (gameEngine: GameEngine) => this.handleArmadillo(gameEngine)],
      ["return", (gameEngine: GameEngine) => this.handleArmadillo(gameEngine)],
    ],
  );
}
