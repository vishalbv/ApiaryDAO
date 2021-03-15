import React, { Component, useState } from "react";
import { useHistory } from "react-router-dom";
import { BlockB, BlockA, SubModal } from "./blocks";
import Modal from "./modal";

const Page2 = () => {
  const [modal, setModal] = useState(false);
  const [val, setVal] = useState(undefined);
  const [status, setStatus] = useState(0);
  let history = useHistory();
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
            height: ".8vw",
            fontSize: ".9em",
            border: "1px solid #f8d252",
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
            Stake APYD-BNB to earn HivePoints
          </div>
          <div
            className="block"
            style={{
              fontSize: ".9em",
              fontWeight: "bold",
              marginTop: "20px",
              borderColor: "#f44336",
              color: "#f44336",
            }}
          >
            <svg class="lock" viewBox="6 0 14 18.2">
              <path
                id="lock"
                d="M 13.00000190734863 -1.324547316272628e-08 C 11.45237159729004 -1.324547316272628e-08 10.11523056030273 0.6425783038139343 9.281251907348633 1.684375166893005 C 8.447264671325684 2.726171016693115 8.100000381469727 4.076954364776611 8.100000381469727 5.534375190734863 L 8.100000381469727 6.300000667572021 L 10.20000171661377 6.300000667572021 L 10.20000171661377 5.534375190734863 C 10.20000171661377 4.429691314697266 10.47342109680176 3.560158014297485 10.92191028594971 2.996874809265137 C 11.37033081054688 2.433592319488525 11.9801025390625 2.099999904632568 13.00000190734863 2.099999904632568 C 14.02263069152832 2.099999904632568 14.62966918945313 2.414453744888306 15.07815933227539 2.974999904632568 C 15.52657985687256 3.535546064376831 15.80000114440918 4.416012763977051 15.80000114440918 5.534375190734863 L 15.80000114440918 6.300000667572021 L 17.90000152587891 6.300000667572021 L 17.90000152587891 5.534375190734863 C 17.90000152587891 4.068749904632568 17.5308895111084 2.704296112060547 16.69690895080566 1.662500143051147 C 15.86286163330078 0.6207032799720764 14.54489994049072 -1.324547316272628e-08 13.00000190734863 -1.324547316272628e-08 Z M 8.100000381469727 6.999999523162842 C 6.940624713897705 6.999999523162842 5.999999523162842 7.940659523010254 5.999999523162842 9.100000381469727 L 5.999999523162842 16.10000038146973 C 5.999999523162842 17.25940895080566 6.940624713897705 18.20000076293945 8.100000381469727 18.20000076293945 L 17.90000152587891 18.20000076293945 C 19.05941009521484 18.20000076293945 20 17.25940895080566 20 16.10000038146973 L 20 9.100000381469727 C 20 7.940659523010254 19.05941009521484 6.999999523162842 17.90000152587891 6.999999523162842 L 8.100000381469727 6.999999523162842 Z M 13.00000190734863 10.49999904632568 C 13.77384948730469 10.49999904632568 14.40000057220459 11.12615013122559 14.40000057220459 11.89999961853027 C 14.40000057220459 12.41681003570557 14.11839008331299 12.85976982116699 13.70000076293945 13.10315990447998 L 13.70000076293945 14.69999980926514 C 13.70000076293945 15.08556079864502 13.3855619430542 15.39999961853027 13.00000190734863 15.39999961853027 C 12.61444187164307 15.39999961853027 12.3000020980835 15.08556079864502 12.3000020980835 14.69999980926514 L 12.3000020980835 13.10315990447998 C 11.88161087036133 12.85976982116699 11.60000133514404 12.41681003570557 11.60000133514404 11.89999961853027 C 11.60000133514404 11.12615013122559 12.22615146636963 10.49999904632568 13.00000190734863 10.49999904632568 Z"
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
        <BlockA status={false} />
        <BlockB status={false} openPopup={openPopup} val={true} />
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

export default Page2;
