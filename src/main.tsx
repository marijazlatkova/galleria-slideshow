import "./styles/global.scss";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app/App";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Router>
    <App />
  </Router>
);