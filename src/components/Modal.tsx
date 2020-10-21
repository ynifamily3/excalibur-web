import React from "react";
import styled from "styled-components";
import useModal from "../hooks/useModal";

const Modal = styled.div<{ open?: boolean }>`
  display: ${(props) => {
    return props.open ? "block" : "none";
  }};
  position: fixed;
  z-index: 300;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
`;

const Close = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
const ModalComponent: React.FC = () => {
  const { open, content, setOpen } = useModal();
  return (
    <Modal open={open}>
      <ModalContent>
        <Close
          onClick={() => {
            setOpen(false);
          }}
        >
          &times;
        </Close>
        {content}
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
