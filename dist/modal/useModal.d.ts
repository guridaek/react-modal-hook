import React from "react";
declare function useModal(elementID: string, children: React.ReactNode): {
    modal: React.ReactPortal;
    isOpen: boolean;
    open: () => void;
    close: () => void;
};
export default useModal;
