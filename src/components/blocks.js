import React, { Component } from "react";
import imgA from "../assets/HP_LOGO.png";
import imgB from "../assets/APYDlogo.png";
import plus from "../assets/Plus.svg";
import minus from "../assets/Minus.svg";

export const BlockB = ({ status, openPopup, val }) => {
  return (
    <div className="blocks doCenter col">
      <div className="heading">STAKED</div>
      <img src={imgB} style={{ padding: "8px", width: "69px" }} />
      <div>0.0000</div>
      <div>APYD</div>
      {status ? (
        <div
          className="button"
          style={{ background: status ? "#f8d252" : "#cccccc" }}
        >
          APPROVE
        </div>
      ) : (
        <div className="doCenter">
          <div
            className="doCenter"
            onClick={() => openPopup(-1)}
            style={{
              // background: "#f8d252",
              background: val ? "rgb(204, 204, 204)" : "#f8d252",
              borderRadius: "30px",
              width: "35px",
              cursor: "pointer",
              height: "35px",
              margin: "1vw",
            }}
          >
            <img src={minus} width={15} />
          </div>
          <div
            className="doCenter"
            onClick={() => openPopup(+1)}
            style={{
              background: "#f8d252",
              borderRadius: "30px",
              cursor: "pointer",

              width: "35px",
              margin: "1vw",

              height: "35px",
            }}
          >
            <img src={plus} width={15} />
          </div>
        </div>
      )}
    </div>
  );
};
export const BlockA = ({ status }) => {
  return (
    <div className="blocks doCenter col">
      <div className="heading">REWARDS</div>
      <img src={imgA} />
      <div>0.0000</div>
      <div>HP</div>
      <div
        className="button"
        style={{ background: status ? "#f8d252" : "#cccccc" }}
      >
        CLAIM
      </div>
    </div>
  );
};

export const SubModal = ({ setModal, val, setVal, status }) => {
  return (
    <div className="doCenter">
      {/* <div>
        <div
          style={{
            color: "#00000055",
            fontSize: ".8em",
            textAlign: "left",
          }}
        >
          <span>{status == 1 ? "Deposit" : "Withdraw"}</span>
          <span style={{ marginLeft: "4vw" }}>0.0000 APYD Available</span>
        </div>
        <div
          className="doCenter input-modal"
          style={{ justifyContent: "space-between" }}
        >
          <div className="doCenter" style={{ width: "70%" }}>
            <input
              type="number"
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
            <span
              style={{
                fontSize: "1.1em",
                fontWeight: "bold",
                color: "#00000095",
              }}
            >
              APYD
            </span>
          </div>
          <div className="button">MAX</div>
        </div>
        <div
          className="doCenter"
          style={{
            justifyContent: "space-between",
            // marginLeft: "-10px",
            width: "60%",
          }}
        >
          <div
            className="button"
            style={{
              background: "#cccccc",
              padding: "8px 15px",
              fontStyle: "italic",
            }}
            onClick={() => setModal(false)}
          >
            CANCEL
          </div>
          <div
            className="button"
            onClick={() => setModal(false)}
            style={{ padding: "8px 15px", fontStyle: "italic" }}
          >
            CONFIRM
          </div>
        </div>
      </div> */}

      <div style={{ width: "80%", color: "#00000066" }} className="modal-box">
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>{""}</span>
          <span style={{ marginLeft: "1vw" }}>0.0000 APYD Available</span>
        </div>
        <div
          className="input-box"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <input
            type="number"
            value={val}
            placeholder={status == 1 ? "Deposit" : "Withdraw"}
            id="inputID"
            onChange={(e) => setVal(e.target.value)}
          />
          <span
            style={{
              fontSize: "1.1em",
              fontWeight: "bold",
              marginRight: "10px",
              color: "#00000095",
            }}
          >
            APYD
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            className="button2"
            style={{
              background: "#cccccc",
              padding: "10px 15px",
              fontStyle: "italic",
              margin: "10px 0",
              width: "32%",
              color: "#2b221f8c",
            }}
            onClick={() => setModal(false)}
          >
            CANCEL
          </div>
          <div
            className="button2"
            onClick={() => setModal(false)}
            style={{
              padding: "10px 15px",
              fontStyle: "italic",
              margin: "10px 0",
              width: "32%",
              color: "#2b221fb3",
            }}
          >
            CONFIRM
          </div>
        </div>
      </div>
      <div>
        <div className="button2 max doCenter">MAX</div>
      </div>
    </div>
  );
};
