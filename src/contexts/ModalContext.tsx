import React from "react";
import { createContext } from "react";

type IStatePattern<T> = [T, React.Dispatch<React.SetStateAction<T>>];

interface IStore<T, U> {
  modalStatus?: IStatePattern<T>;
  modalContent?: IStatePattern<U>;
}

export const ModalContext = createContext<IStore<boolean, JSX.Element>>({});

const Prov: React.FC = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState(<></>);

  const store: IStore<boolean, JSX.Element> = {
    modalStatus: [open, setOpen],
    modalContent: [content, setContent],
  };

  return (
    <ModalContext.Provider value={store}>{children}</ModalContext.Provider>
  );
};

export default Prov;
