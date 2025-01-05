import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, children, onClose, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} onClose={onClose} className={`modal ${className}`}>
      {open ? children: null}
    </dialog>,
    document.getElementById("modal")
  );
}
