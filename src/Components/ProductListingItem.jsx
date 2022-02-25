import React from "react";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";

function ProductListingItem({
  title,
  smallDesp,
  price,
  prevPrice,
  discount,
  imgUrl,
}) {
  return (
    <Wrapper>
      <div className="product-card">
        <div className="product-img">
          <img src={imgUrl} alt="" />
          <div className="heart-icon">
            <FaRegHeart />
          </div>
        </div>
        <div className="product-card-body">
          <h2>{title}</h2>
          <p className="small-desp"> {smallDesp} </p>
          <p className="product-pricing">
            <span className="product-price"> ₹{price} </span>
            <span className="product-prev-price">₹{prevPrice}</span>
            <span className="product-discount">{discount}% Off</span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .product-img {
    position: relative;

    .heart-icon {
      position: absolute;
      top: 5%;
      right: 5%;
      font-size: 3vw;
      width: 3rem;
      height: 3rem;
      background: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
  }

  .product-card img {
    width: 100%;
    display: block;
  }
  .product-card-body {
    padding: 0.5rem 1rem;
    line-height: 1.6;
    h2 {
      font-size: 4vw;
    }
    p {
      font-size: 3vw;
    }
    .small-desp {
      opacity: 0.6;
    }

    .product-price {
      font-weight: 800;
    }

    .product-pricing {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .product-prev-price {
      text-decoration: line-through;
      opacity: 0.5;
    }

    .product-discount {
      font-weight: 800;
      font-size: 2.5vw;
      color: green;
    }
  }
`;

export default ProductListingItem;
