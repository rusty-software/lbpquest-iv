import { TextView } from "./TextView";

interface WinViewProps {
  text: string;
}

export const WinView = (props: WinViewProps) => {
  return (
    <div className="win">
      <TextView text={props.text} />
    </div>
  );
};
