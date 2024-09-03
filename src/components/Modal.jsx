/* eslint-disable react/prop-types */

import ReactDOM from "react-dom";
import classes from "./Modal.module.css"

const BackDrop = ({ onClose }) => {
  return (
    <div
      className={classes.backdrop}
      onClick={onClose}
    />
  );
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

function Modal({ onClose, children }) {
  return (
    <>
      <div>
        {ReactDOM.createPortal(<BackDrop onClose={onClose} />, portalElement)}
        {ReactDOM.createPortal(
          <ModalOverlay>{children}</ModalOverlay>,
          portalElement
        )}
      </div>
    </>
  );
}

export default Modal;
