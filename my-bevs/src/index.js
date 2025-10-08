import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
registerServiceWorker();
