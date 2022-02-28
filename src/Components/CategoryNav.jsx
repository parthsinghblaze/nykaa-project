import React from "react";
import styled from "styled-components";
import img from "../images/girl.jpg";
import { BsBag } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";

function CategoryNav() {
  return (
    <Wrapper>
      <div className="main">
        <div className="category-header">
          <div className="left-side">
            <img src={img} alt="" />
            <div className="category-data">
              <h3>Store</h3>
              <h2> Women </h2>
            </div>
          </div>
          <div className="right-side">
            <h3>
              <BsBag />
            </h3>
            <h3>
              <AiOutlineHeart />
            </h3>
          </div>
        </div>
        <div className="category-search-box">
          <form action="">
            <AiOutlineSearch />
            <input type="text" placeholder="Search for styles, brand & more" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .main {
    font-size: 4vw;
  }
  .category-search-box {
    margin: 1rem 0;
    background: #eeeeee;
    border-radius: 0.5rem;

    padding: 1rem 2rem;

    form {
      display: flex;
      align-items: center;
    }

    input {
      background: transparent;
      border: none;
      flex-grow: 1;
      padding: 1rem;
      outline: none;
    }
  }

  .category-header {
    display: flex;
    justify-content: space-between;
    .left-side {
      display: flex;
      gap: 1rem;
      img {
        width: 8vw;
        height: 8vw;
        object-fit: cover;
        border-radius: 50%;
        object-position: center;
      }

      .category-data {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3 {
          font-size: 3vw;
          color: var(--text-primary-color);
        }

        h2 {
          font-size: 3.5vw;
        }
      }
    }

    .right-side {
      display: flex;
      gap: 2rem;
      align-items: center;
      font-size: 4vw;
    }
  }
`;

export default CategoryNav;
