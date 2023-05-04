import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { createPortal } from "react-dom";
import useKeyDown from "./useKeyDown";
import St from "./modalStyled";
function useModal(elementID, children) {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var open = function () {
        setIsOpen(true);
    };
    var close = function () {
        setIsOpen(false);
    };
    useKeyDown("Escape", close);
    var modal = createPortal(_jsx(_Fragment, { children: isOpen ? (_jsxs(_Fragment, { children: [_jsx(St.Backdrop, { onClick: close }), _jsx(St.Container, { children: children })] })) : null }), document.getElementById(elementID));
    return { modal: modal, isOpen: isOpen, open: open, close: close };
}
export default useModal;
