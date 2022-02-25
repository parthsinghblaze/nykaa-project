import React from "react";
import styled from "styled-components";
import CategoryNav from "../Components/CategoryNav";
import ProductListingItem from "../Components/ProductListingItem";
import { productListingItem } from "../data/productListingItem";

function ProductListing() {
  return (
    <>
      <Wrapper>
        <div className="container-fluid">
          <div className="container">
            <CategoryNav />
            <div className="section-title">
              <h2>Products List</h2>
              <h5>767 items</h5>
            </div>
          </div>
        </div>
        <div className="product-main-section">
          {productListingItem.map((item, index) => {
            const { title, smallDesp, price, prevPrice, discount, imgUrl } =
              item;
            return <ProductListingItem {...item} />;
          })}
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .section-title {
    line-height: 1.6;

    h2 {
      font-size: 3vw;
    }

    h5 {
      font-size: 2vw;
    }
  }

  .product-main-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.2rem;
  }
`;

export default ProductListing;
