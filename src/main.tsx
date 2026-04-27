import { createRoot } from "react-dom/client";
import "./index.css";
import { GameView } from "./view/GameView";

createRoot(document.getElementById("root")!).render(<GameView />);
