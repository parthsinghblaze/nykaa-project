import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function CategoryPageList({ id, name, desp, img, url }) {
  return (
    <Wrapper>
      <Link to={url}>
        <div className="card">
          <img src={img} alt="" />
          <div className="card-body">
            <h2> {name} </h2>
            <p> {desp} </p>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  img {
    width: 100%;
    height: 40vw;
    object-fit: cover;
  }

  .card-body {
    padding: 1rem 0;
    text-transform: capitalize;
  }

  h2 {
    font-size: 4vw;
  }

  p {
    font-size: 3vw;
    line-height: 2;
  }
`;

export default CategoryPageList;
