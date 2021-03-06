import React, { Component } from "react";
import imgA from "../assets/HP_LOGO_.png";
import imgB from "../assets/APYDlogo_u.png";
import plus from "../assets/Plus.png";
import minus from "../assets/Minus.png";

export const BlockB = ({ status, setModal }) => {
  return (
    <div className="blocks doCenter col">
      <div className="heading">STAKED</div>
      <img src={imgB} />
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
            onClick={() => setModal(true)}
            style={{
              background: "#f8d252",
              borderRadius: "30px",
              width: "45px",
              cursor: "pointer",
              height: "45px",
              margin: "1vw",
            }}
          >
            <img src={minus} />
          </div>
          <div
            className="doCenter"
            onClick={() => setModal(true)}
            style={{
              background: "#f8d252",
              borderRadius: "30px",
              cursor: "pointer",

              width: "45px",
              margin: "1vw",

              height: "45px",
            }}
          >
            <img src={plus} />
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

export const SubModal = ({ setModal, val, setVal }) => {
  return (
    <div>
      <div style={{ color: "#818181", fontSize: ".8em" }}>
        <span>Deposit BEE - BNB</span>
        <span style={{ marginLeft: "4vw" }}>0.0000 BEE - BNB Available</span>
      </div>
      <div className="doCenter input-modal">
        <div>
          <input
            type="number"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <span
            style={{
              fontSize: "1.1em",
              fontWeight: "bold",
              color: "black",
            }}
          >
            BEE - BNB
          </span>
        </div>
        <div className="button">MAX</div>
      </div>
      <div className="doCenter">
        <div
          className="button"
          style={{ background: "#cccccc" }}
          onClick={() => setModal(false)}
        >
          CANCEL
        </div>
        <div className="button" onClick={() => setModal(false)}>
          CONFIRM
        </div>
      </div>
    </div>
  );
};
