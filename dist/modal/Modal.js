import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createPortal } from "react-dom";
import useKeyDown from "./useKeyDown";
import St from "./modalStyled";
function Modal(_a) {
    var elementID = _a.elementID, closeModal = _a.closeModal, children = _a.children;
    useKeyDown("Escape", closeModal);
    return createPortal(_jsxs(_Fragment, { children: [_jsx(St.Backdrop, { onClick: closeModal }), _jsx(St.Container, { children: children })] }), document.getElementById(elementID));
}
export default Modal;
