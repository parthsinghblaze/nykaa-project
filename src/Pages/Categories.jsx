import React from "react";
import styled from "styled-components";
import CategoryPageList from "../Components/CategoryPageList";
import { category } from "../data/category";
import logo from "../images/logo.png";

function Categories() {
  return (
    <Wrapper>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <h1 className="title">Choose your store</h1>
        <div className="category">
          {category.map((item) => {
            return <CategoryPageList {...item} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .logo img {
    width: 7rem;
  }

  .title {
    text-align: center;
    padding: 2rem 0;
    font-size: 4vw;
  }

  .category {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export default Categories;
