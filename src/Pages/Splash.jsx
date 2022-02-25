import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import logo from "../images/logo.png";

function Splash() {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 6, opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <Wrapper className="container-fluid">
        <div className="container">
          <div className="main">
            <img src={logo} alt="" />
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
}

const Wrapper = styled.div`
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
