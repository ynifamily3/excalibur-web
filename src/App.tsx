import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "normalize.css";
import "./styles/global.css";

import { Intro, Privacy } from "./components/pages";

function App() {
  return (
    <HashRouter>
      <Route exact key="/" path="/" component={Intro} />
      <Route exact key="/privacy" path="/privacy" component={Privacy} />
    </HashRouter>
  );
}

export default App;
