import { GameError } from "../app/GameError";
import { TextView } from "./TextView";

const unknowns: string[] = [
  "Uh, I'm not quite sure what you're trying to do...",
  "Is that even legal in Blanco County?",
  "Please try to take your quest a little more seriously.",
  "Why do I even bother to prompt you?",
  "<narrator>It turned out that the input was not parsable. At all.</narrator>",
  "Nope, no idea what that means.",
  "Gerald could probably make more sense of that than I can.",
  "That is not a thing. Type things that are things.",
  "Perhaps you should try rephrasing that input...",
  "No, seriously -- type in things that are likely to work.",
  "I'm sure I could figure out what you intended... eventually. In the meantime:",
  "Yes, this is a random response to irrelevant input. Please type something else.",
  "Sorry, I was distracted by the sound of turkeys. Other input, please.",
  "In this game, we use our words. Type something that might work.",
  "That's a Man Down kind-of statement if I've ever heard one!",
  "I can't go for that. No, no... No can do.",
  "The cedar brake is watching. Type something meaningful.",
  "Run away! RUN AWAY! Or type something that makes sense.",
  "Gerald has typed more coherent things, and he is a turkey.",
  "Somewhere, a mounted stag is shaking its head at you.",
];

const errorMessage = (error: GameError, customText: string): string => {
  switch (error) {
    case GameError.InvalidPath:
      return customText ? customText : "You can't move that way.";
    case GameError.UnknownCommand:
      return customText.length > 0
        ? customText
        : unknowns[Math.floor(Math.random() * unknowns.length)] +
            '\n\nFor a list of commands, type "help".';
    case GameError.NoItem:
      return customText ? customText : "Sorry, I don't see that item here.";
    case GameError.UnknownItem:
      return customText ? customText : "Sorry, that is not a real item.";
  }
};

interface ErrorViewProps {
  error: GameError;
  customText: string;
}

export const ErrorView = (props: ErrorViewProps) => {
  const { error, customText } = props;

  return (
    <div className="error">
      <TextView text={errorMessage(error, customText)} />
    </div>
  );
};
