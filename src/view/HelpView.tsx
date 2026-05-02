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
        <div className="tiny-font">version: {packageJson.version}</div>
      </div>
    </div>
  );
};
