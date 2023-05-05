import React from "react";
type ModalContainerProps = {
    children: React.ReactNode;
    closeModal: () => void;
};
declare function Modal({ children, closeModal }: ModalContainerProps): React.ReactPortal;
export default Modal;
