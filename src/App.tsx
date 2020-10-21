import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "normalize.css";
import "./styles/global.css";
import Modal from "./components/Modal";
import { ModalContextProvider } from "./contexts";
import { Intro, Privacy } from "./components/pages";

function App() {
  return (
    <ModalContextProvider>
      <Modal />
      <BrowserRouter>
        <Route exact key="/" path="/" component={Intro} />
        <Route exact key="/privacy" path="/privacy" component={Privacy} />
      </BrowserRouter>
    </ModalContextProvider>
  );
}

export default App;
