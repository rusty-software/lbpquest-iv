import packageJson from "../../package.json";
import AsciiImage from "./AsciiImage";
import { Title } from "./Title";

interface SplashProps {
  hasSave: boolean;
}

export const SplashView = ({ hasSave }: SplashProps) => {
  return (
    <div className="game-intro">
      <h1 className="sr-only">lbpquest-iv: Oakridge Ranch</h1>
      <AsciiImage imageSrc={Title} alt="LBPQuest IV" />
      <h2 className="game-intro-subtitle">Wild Turkey Trouble</h2>
      {hasSave ? (
        <>
          <h3 className="game-intro-enter" role="button">
            Press N for a new game
          </h3>
          <h3 className="game-intro-enter" role="button">
            Press L to load your saved game
          </h3>
        </>
      ) : (
        <h3
          className="game-intro-enter"
          role="button"
          aria-label="Press Enter to start the game"
        >
          Press Enter to start the game
        </h3>
      )}
      <h3 className="game-intro-credits">Dev'd by: rusty-software</h3>
      <div className="tiny-font">version: {packageJson.version}</div>
    </div>
  );
};
