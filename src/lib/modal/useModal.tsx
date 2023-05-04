import React, { useState } from "react";
import { createPortal } from "react-dom";
import useKeyDown from "./useKeyDown";
import St from "./modalStyled";

function useModal(elementID: string, children: React.ReactNode) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  useKeyDown("Escape", close);

  const modal = createPortal(
    <>
      {isOpen ? (
        <>
          <St.Backdrop onClick={close} />
          <St.Container>{children}</St.Container>
        </>
      ) : null}
    </>,
    document.getElementById(elementID) as HTMLDivElement
  );
  return { modal, isOpen, open, close };
}

export default useModal;
