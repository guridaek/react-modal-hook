import React from "react";
type ModalContainerProps = {
    elementID: string;
    closeModal: () => void;
    children: React.ReactNode;
};
declare function Modal({ elementID, closeModal, children }: ModalContainerProps): React.ReactPortal;
export default Modal;
