import React from "react";
import { Link } from "react-router-dom";
import styledComponents from "styled-components";
import { curlatedpick } from "../data/curlatedpick";

function CurlatedPick() {
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="container">
          <div className="section-title">
            <h2>CATEGORIES</h2>
            <h3>Shop from our curated picks</h3>
          </div>
          <div className="curlated-section">
            {curlatedpick.map((item) => {
              const { id, img, text } = item;
              return (
                <Link key={id} to="/product-lists">
                  <div className="curlated-item">
                    <img src={img} alt="" className="curlated-img" />
                    <div className="curlated-body">
                      <h2> {text} </h2>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styledComponents.div`
  .section-title{
    text-align : center;
    line-height : 1.5;

    h2{
      font-size : 4vw;
    }

    h3{
      font-size : 4vw;
    }
  }

  .curlated-section{
    padding : 4rem 0;
    display : grid;
    grid-template-columns : repeat(3 , 1fr);
    gap : 3rem 2rem;

    .curlated-img{
      width : 100%;
    }

    h2{
      font-size : 4vw;
      text-transform : capitalize;
      font-weight : 400;
      line-height : 1.6;
    }
  }
`;

export default CurlatedPick;
