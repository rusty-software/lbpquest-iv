import packageJson from "../../package.json";

const helpMapper: { [s: string]: string } = {
  help: " : shows this help text",
  inventory: " (inv) : lists the items in your bag",
  examine:
    " (ex) <object> : e.g. `examine flashlight` to look closely at an item",
  look: " (l) : describes your current location",
  take: " <object> : e.g. `take flashlight` to add an item to your bag",
  use: " <object> : e.g. `use flashlight` to activate an item",
  drop: " <object> : e.g. `drop flashlight` to leave an item behind",
  enter: " <code> : e.g. `enter 1234` to enter a numeric code",
  wait: " (z) : cause time to pass without you having to move",
  save: " : saves the current game",
};

interface HelpViewProps {
  visibleCommands: string[];
}

export const HelpView = (props: HelpViewProps) => {
  const { visibleCommands } = props;

  const helpBlock = visibleCommands.map((command) => (
    <div key={command} className="command-block">
      <div className="command-block-key">{command}</div>
      <div className="command-block-tip">{helpMapper[command]}</div>
    </div>
  ));

  return (
    <div className="help">
      <div className="help-description">
        These are the standard commands. There may be others.
      </div>
      <br />
      {helpBlock}
      <br />
      <div className="help-description">
        Use logic and the property to figure out the rest.
      </div>
      <br />
      <div className="help-description">
        If you try to do something and get a response indicating the game didn't
        understand what you were doing, you might try to expand the description.
        For example, if you try "eat bagel" and the game says "There is no bagel
        here," you might try "eat blueberry bagel". The game sometimes has to
        qualify items where multiple types of those items exist...
        <div className="tiny-font">version: {packageJson.version}</div>
      </div>
    </div>
  );
};
