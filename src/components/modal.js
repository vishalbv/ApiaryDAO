import React, { FunctionComponent } from "react";

const Modal = ({ children, show, styleName, toggleShow }) => {
  return show ? (
    <div className={"modalView"}>
      <div>
        <div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "30vh",
                justifyContent: "center",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
