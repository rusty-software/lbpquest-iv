import React from "react";
import { GameEngine } from "../app/GameEngine";
import { SaveGame } from "../app/SaveGame";
import { PlayView } from "./PlayView";
import { SplashView } from "./SplashView";

interface StartState {
  gameStarted: boolean;
  loadGame: boolean;
}

export class GameView extends React.Component<any, StartState> {
  private gameStarting = false;

  constructor(props: any) {
    super(props);
    this.state = { gameStarted: false, loadGame: false };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleTouch = this.handleTouch.bind(this);
  }

  public componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
    document.addEventListener("touchstart", this.handleTouch, false);
  }

  public handleKeyDown(event: KeyboardEvent) {
    if (this.gameStarting || this.state.gameStarted) return;
    if (event.key === "Enter" || event.key === "n" || event.key === "N") {
      event.preventDefault();
      this.gameStarting = true;
      this.setState({ gameStarted: true, loadGame: false });
    } else if ((event.key === "l" || event.key === "L") && GameEngine.hasSave()) {
      event.preventDefault();
      this.gameStarting = true;
      this.setState({ gameStarted: true, loadGame: true });
    }
  }

  public handleTouch(_event: TouchEvent) {
    if (this.gameStarting || this.state.gameStarted) return;
    this.gameStarting = true;
    this.setState({ gameStarted: true, loadGame: false });
  }

  public render() {
    return (
      <div id="game">
        {this.state.gameStarted
          ? <PlayView loadGame={this.state.loadGame} />
          : <SplashView hasSave={SaveGame.hasSave()} />}
      </div>
    );
  }
}
