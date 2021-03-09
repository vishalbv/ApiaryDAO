import React, { Component, useState } from "react";
import { BlockB, BlockA, SubModal } from "./blocks";
import Modal from "./modal";

const Page3 = () => {
  const [modal, setModal] = useState(false);
  const [val, setVal] = useState(0);

  const [status, setStatus] = useState(0);

  const openPopup = (val) => {
    setStatus(val);
    setModal(true);
  };

  return (
    <div>
      <div className="top-section">
        <div
          className="top-button doCenter"
          style={{
            background: "#00000015",
            height: "1.1vw",
            fontSize: ".8em",
            // marginTop: "-4px",
          }}
        >
          <div
            style={{
              background: "green",
              borderRadius: "10px",
              width: "7px",
              height: "7px",
              marginRight: "10px",
            }}
          ></div>
          <span>0x8q..3sd5</span>
        </div>
        <div className="doCenter linkage">
          <div
            className="links"
            onClick={() =>
              (window.location.href = "https://docs.apiarydao.xyz")
            }
          >
            Docs
          </div>
          <div className="seperator"></div>
          <div
            className="links"
            onClick={() => (window.location.href = "https://t.me/ApiaryDAO")}
          >
            Telegram
          </div>
          <div className="seperator"></div>
          <div
            className="links"
            onClick={() =>
              (window.location.href = "https://twitter.com/apiarydao")
            }
          >
            Twitter
          </div>
        </div>
        <div className="doCenter col">
          <div className="header">ApiaryDAO</div>
          <div
            className="links2"
            style={{ fontSize: "1.45em", marginTop: "-4px" }}
          >
            Stake APYD to earn HivePoints
          </div>
          <div
            className="block"
            style={{ fontSize: ".9em", fontWeight: "bold", marginTop: "20px" }}
          >
            <svg class="padlock" viewBox="0 0 19 19">
              <path
                id="padlock"
                d="M 5.115384101867676 0 C 3.499698162078857 0 2.103818893432617 0.6708234548568726 1.233173012733459 1.758413314819336 C 0.3625302016735077 2.84600305557251 -2.026086853845754e-08 4.256160259246826 -2.026086853845754e-08 5.77764368057251 L -2.026086853845754e-08 8.03846263885498 L 2.192307949066162 8.03846263885498 L 2.192307949066162 5.77764368057251 C 2.192307949066162 4.624402523040771 2.477768182754517 3.71664834022522 2.945913314819336 3.128605604171753 C 3.414065361022949 2.540563106536865 4.050632953643799 2.192307949066162 5.115384101867676 2.192307949066162 C 6.182994365692139 2.192307949066162 6.816710472106934 2.520583868026733 7.284856796264648 3.105769157409668 C 7.753022193908691 3.690954446792603 8.03846263885498 4.610123157501221 8.03846263885498 5.77764368057251 L 8.03846263885498 6.57692289352417 L 10.23076820373535 6.57692289352417 L 10.23076820373535 5.77764368057251 C 10.23076820373535 4.24759578704834 9.845434188842773 2.823166131973267 8.974795341491699 1.735576748847961 C 8.104084968566895 0.647986888885498 6.728215217590332 0 5.115384101867676 0 Z M 6.57692289352417 7.307691097259521 C 5.366586208343506 7.307691097259521 4.384615898132324 8.289697647094727 4.384615898132324 9.5 L 4.384615898132324 16.80769348144531 C 4.384615898132324 18.01806640625 5.366586208343506 19 6.57692289352417 19 L 16.80769348144531 19 C 18.01806640625 19 19 18.01806640625 19 16.80769348144531 L 19 9.5 C 19 8.289697647094727 18.01806640625 7.307691097259521 16.80769348144531 7.307691097259521 L 6.57692289352417 7.307691097259521 Z M 11.692307472229 10.96153736114502 C 12.50017261505127 10.96153736114502 13.15384578704834 11.61521053314209 13.15384578704834 12.42307662963867 C 13.15384578704834 12.96260261535645 12.8598575592041 13.42503356933594 12.42307662963867 13.679123878479 L 12.42307662963867 15.34615325927734 C 12.42307662963867 15.7486629486084 12.09481620788574 16.07692527770996 11.692307472229 16.07692527770996 C 11.28979873657227 16.07692527770996 10.96153736114502 15.7486629486084 10.96153736114502 15.34615325927734 L 10.96153736114502 13.679123878479 C 10.52475738525391 13.42503356933594 10.23076820373535 12.96260261535645 10.23076820373535 12.42307662963867 C 10.23076820373535 11.61521053314209 10.88444137573242 10.96153736114502 11.692307472229 10.96153736114502 Z"
              ></path>
            </svg>
            TIME UNTIL UNLOCKED - 3768 Blocks
          </div>

          <div
            className="links2"
            style={{ fontSize: "1em", fontWeight: "bold" }}
          >
            Staking/Claiming resets timelock
          </div>
          <div className="links2" style={{ fontSize: ".9em" }}>
            34287 Blocks ( - 3 Days )
          </div>
        </div>
      </div>
      <div className="doCenter">
        <BlockA status={true} />
        <BlockB status={false} openPopup={openPopup} val={false} />
      </div>
      <Modal
        toggleShow={() => {
          setModal(!modal);
          //   history.goBack();
        }}
        show={modal}
      >
        <SubModal
          setModal={setModal}
          val={val}
          setVal={setVal}
          status={status}
        />
      </Modal>
    </div>
  );
};

export default Page3;
