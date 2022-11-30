import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import App from "./App";
import ReactGA from "react-ga";

ReactGA.initialize("G-BM5NT3CD18");
ReactGA.pageview(window.location.pathname + window.location.search);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
