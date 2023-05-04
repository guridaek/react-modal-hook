import { useEffect } from "react";
var useKeyDown = function (key, onKeyDown) {
    useEffect(function () {
        var handler = function (e) {
            if (e.key === key) {
                onKeyDown();
            }
        };
        window.addEventListener("keydown", handler);
        return function () { return window.removeEventListener("keydown", handler); };
    }, [key, onKeyDown]);
};
export default useKeyDown;
