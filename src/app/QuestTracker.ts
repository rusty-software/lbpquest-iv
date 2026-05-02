import { QuestDefinition } from "./Constants";

interface Scorer {
  score: number;
}

export class QuestTracker {
  private readonly completed = new Set<string>();

  public complete(quest: QuestDefinition, scorer: Scorer): boolean {
    if (this.isComplete(quest)) return false;
    this.completed.add(quest.id);
    scorer.score += quest.value;
    return true;
  }

  public isComplete(quest: QuestDefinition): boolean {
    return this.completed.has(quest.id);
  }

  public get completedCount(): number {
    return this.completed.size;
  }

  public getCompletedIds(): string[] {
    return Array.from(this.completed);
  }

  public restore(ids: string[]): void {
    for (const id of ids) {
      this.completed.add(id);
    }
  }
}
