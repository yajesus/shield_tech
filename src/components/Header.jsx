import React from "react";
import "../css/header.css";
import logo from "../asset/logo.svg";
import logo1 from "../asset/logo1.svg";
import tabicon from "../asset/tabicon.svg";
import cancel from "../asset/cancel.svg";
import tele from "../asset/tele.png";
import insta from "../asset/insta.png";
import x from "../asset/x.png";
import vector1 from "../asset/vector1.png";
import vector2 from "../asset/vector2.png";
import sheild from "../asset/sheild.svg";
function showtabside() {
  const sidetab = document.querySelector(".side_tabheader");
  if (sidetab.style.display == "none") {
    sidetab.style.display = "block";
  } else {
    sidetab.style.display = "none";
  }
}
export const Header = () => {
  return (
    <>
      <div>
        <header className="header_contain">
          <img src={logo} className="header_logo" alt="logo" />
          <div className="right_header">
            <ul className="headerlist_contain">
              <li className="list">Home</li>
              <li className="list">About Us</li>
              <li className="list">Servies</li>
              <li className="list">Resources</li>
            </ul>
            <button className="header_btn">Contact Us</button>
          </div>
        </header>
        <div className="header_tabcontain">
          <img src={logo} alt="logo" className="tab_logo" />
          <div className="header-tabright">
            <img
              src={tabicon}
              alt="icon"
              className="tabicon"
              onClick={showtabside}
            />
          </div>
          <div className="side_tabcontain">
            <div className="side_tabheader">
              <div className="tabside_header">
                <img src={logo1} alt="icon" className="sidelogo" />
                <img
                  src={cancel}
                  alt="icon"
                  className="tab_cancel"
                  onClick={showtabside}
                />
              </div>
              <ul className="tablist_contain">
                <li className="tab_list">Home</li>
                <li className="tab_list">About Us</li>
                <li className="tab_list">Servies</li>
                <li className="tab_list">Resources</li>
                <button className="tabheadr_btn">Contact Us</button>
              </ul>

              <div className="headaer_socialcontain">
                <div className="side_icons">
                  <img src={tele} alt="img" />
                </div>
                <div className="side_icons">
                  <img src={insta} alt="img" />
                </div>
                <div className="side_icons">
                  <img src={x} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_main">
          <img src={vector1} className="header_vector" alt="img" />
          <img src={vector2} className="header_vector1" alt="img" />
          <div className="title_contain">
            <div className="titleinner_contain">
              <p className="header_title">Welcome to Shield Tech:</p>
              <p className="header_undertitle">Where Vigilance Is The Key</p>
            </div>
            <img src={sheild} className="sheild_img" alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};
