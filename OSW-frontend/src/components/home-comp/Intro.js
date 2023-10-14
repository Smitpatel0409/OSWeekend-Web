import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import intro_img from "../../img/Onboarding.gif";
import "./Intro.css";

const Intro = () => {
  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate("/login");
  };
  const handleClickAbout = () => {
    navigate("/about");
  };
  return (
    <div className="intro-container">
      <div className="image">
        <img src={intro_img} alt="" />
      </div>
      <div className="text">
        <b>
          <p className="heading">
            Make good things <span style={{ color: "#0E8388" }}>together</span>.
          </p>
        </b>
        <p className="AppName">Open Source Weekend</p>
        <p className="intro">
        Welcome to Open Source Weekend (OSW)! OSW is a community-led endeavor focused on regularly advocating and celebrating open-source technologies. Our objective is to establish a space for exchanging knowledge, fostering cooperation and delving into diverse open-source projects.</p>
        {/* <div className="box-container">
          <div className="rounded-grey-div-lg">
            <a
              className="div-link"
              href="https://twitter.com/i/flow/login?redirect_after_login=%2Fhashtag%2FWTMJalandhar"
            >
              #WTMJalandhar
            </a>
          </div>
          <div className="rounded-grey-div-sm">
            <a
              className="div-link"
              href="https://twitter.com/i/flow/login?redirect_after_login=%2Fhashtag%2FGDG"
            >
              #GDG
            </a>
          </div>
          <div className="rounded-grey-div-lg">
            <a
              className="div-link"
              href="https://twitter.com/i/flow/login?redirect_after_login=%2Fhashtag%2FGDGJalandhar"
            >
              #GDGJalandhar
            </a>
          </div>
          <div className="rounded-grey-div-sm">
            <a
              className="div-link"
              href="https://twitter.com/i/flow/login?redirect_after_login=%2Fhashtag%2FAura"
            >
              #Aura
            </a>
          </div> */}
        {/* </div> */}
        <div className="buttons">
          <Button className="my-button" onClick={handleClickLogin}>
            Become A Member
          </Button>
          <Button className="my-button" onClick={handleClickAbout} style={{border: '2px solid #0e8388', background: 'none'}}>
            Learn More
          </Button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Intro;
