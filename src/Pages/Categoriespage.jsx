import React from "react";
import styled from "styled-components";
import CategoryNav from "../Components/CategoryNav";
import CategorySlider from "../Components/CategorySlider";
import CurlatedPick from "../Components/CurlatedPick";
import endofseason from "../images/endofseason.jpg";

function Categoriespage() {
  return (
    <>
      <Wrapper>
        {/* category nav */}
        <div className="container-fluid">
          <div className="container">
            <CategoryNav />
          </div>
        </div>
        {/* category nav */}
        {/* category slider */}
        <CategorySlider />
        {/* category slider */}

        {/* end of season image */}
        <div className="endOfSeasonImg">
          <img src={endofseason} alt="" />
        </div>
        {/* end of season image */}
        <CurlatedPick />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .endOfSeasonImg {
    background: red;
  }
  .endOfSeasonImg img {
    width: 100%;
    display: block;
  }
`;

export default Categoriespage;
