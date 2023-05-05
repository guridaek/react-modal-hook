import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createPortal } from "react-dom";
import useKeyDown from "./useKeyDown";
import St from "./modalStyled";
function Modal(_a) {
    var children = _a.children, closeModal = _a.closeModal;
    useKeyDown("Escape", closeModal);
    return createPortal(_jsxs(_Fragment, { children: [_jsx(St.Backdrop, { onClick: closeModal }), _jsx(St.Container, { children: children })] }), document.getElementById("modal"));
}
export default Modal;
