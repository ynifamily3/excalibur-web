import { useContext } from "react";
import { ModalContext } from "../contexts";

const useModal = () => {
  const { modalStatus, modalContent } = useContext(ModalContext);
  const [open, setOpen] = modalStatus!;
  const [content, setContent] = modalContent!;
  const setAndOpen = (_content: JSX.Element) => {
    setContent(_content);
    setOpen(true);
  };

  return { open, setOpen, content, setContent, setAndOpen };
};

export default useModal;
