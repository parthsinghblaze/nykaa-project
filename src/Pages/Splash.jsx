import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../images/logo.png";

function Splash() {
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 4000);
  }, []);

  return (
    <Wrapper
      className={`container-fluid ${!splashScreen ? "splash-none" : ""}`}
    >
      <div className="container">
        <div className="main">
          <img src={logo} alt="" />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: black;
  .main {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100px;
    }
  }
`;

export default Splash;
