import { createPortal } from "react-dom";
import useKeyDown from "./useKeyDown";
import React from "react";
import St from "./modalStyled";

type ModalContainerProps = {
  elementID: string;
  closeModal: () => void;
  children: React.ReactNode;
};

function Modal({ elementID, closeModal, children }: ModalContainerProps) {
  useKeyDown("Escape", closeModal);

  return createPortal(
    <>
      <St.Backdrop onClick={closeModal} />
      <St.Container>{children}</St.Container>
    </>,

    document.getElementById(elementID) as HTMLDivElement
  );
}

export default Modal;
