import React, { FunctionComponent } from "react";

const Modal = ({ children, show, styleName, toggleShow }) => {
  return show ? (
    <div className={"modalView"}>
      <div>
        <div>
          <div>
            <div className="modalClass">{children}</div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
