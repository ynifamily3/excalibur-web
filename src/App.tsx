import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "normalize.css";
import "./styles/global.css";
import Modal from "./components/Modal";
import { ModalContextProvider } from "./contexts";
import { Intro, Privacy } from "./components/pages";

function App() {
  return (
    <ModalContextProvider>
      <Modal />
      <HashRouter>
        <Route exact key="/" path="/" component={Intro} />
        <Route exact key="/privacy" path="/privacy" component={Privacy} />
      </HashRouter>
    </ModalContextProvider>
  );
}

export default App;
