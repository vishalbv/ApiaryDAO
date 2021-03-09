import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { BlockB, BlockA } from "./blocks";

const Page1 = () => {
  let history = useHistory();

  return (
    <div>
      <div className="top-section">
        <div
          className="top-button doCenter"
          onClick={() => history.push("/page2")}
        >
          <svg class="connect" viewBox="2 3 22 19.8">
            <path
              id="connect"
              d="M 20.70000076293945 3 C 18.88059997558594 3 17.39999961853027 4.480600357055664 17.39999961853027 6.300000190734863 C 17.39999961853027 6.807936191558838 17.52495956420898 7.283388614654541 17.73088073730469 7.713675975799561 L 13.64448928833008 11.80000019073486 L 8.398050308227539 11.80000019073486 C 7.942355155944824 10.52262496948242 6.731770992279053 9.600000381469727 5.300000667572021 9.600000381469727 C 3.480599641799927 9.600000381469727 1.999999403953552 11.08059978485107 1.999999403953552 12.89999961853027 C 1.999999403953552 14.71939945220947 3.480599641799927 16.19999694824219 5.300000667572021 16.19999694824219 C 6.731770992279053 16.19999694824219 7.942355155944824 15.27742862701416 8.398050308227539 13.99999904632568 L 13.64448928833008 13.99999904632568 L 17.73088073730469 18.08627891540527 C 17.52495956420898 18.51659965515137 17.39999961853027 18.99201965332031 17.39999961853027 19.49999809265137 C 17.39999961853027 21.31939506530762 18.88059997558594 22.79999923706055 20.70000076293945 22.79999923706055 C 22.5193977355957 22.79999923706055 24 21.31939506530762 24 19.49999809265137 C 24 17.68059921264648 22.5193977355957 16.19999694824219 20.70000076293945 16.19999694824219 C 20.19202041625977 16.19999694824219 19.71659851074219 16.3249568939209 19.28627777099609 16.53087997436523 L 15.65550804138184 12.89999961853027 L 19.28627777099609 9.26914119720459 C 19.71659851074219 9.475094795227051 20.19202041625977 9.600000381469727 20.70000076293945 9.600000381469727 C 22.5193977355957 9.600000381469727 24 8.119399070739746 24 6.300000190734863 C 24 4.480600357055664 22.5193977355957 3 20.70000076293945 3 Z"
            ></path>
          </svg>
          <span>Connect</span>
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
            TIME UNTIL UNLOCKED - 6 Blocks
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
        <BlockB status={true} />
      </div>
    </div>
  );
};

export default Page1;
