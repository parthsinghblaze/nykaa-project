import React from "react";
import styled from "styled-components";
import ProductItemDetailsImageSlider from "../Components/ProductItemDetailsImageSlider";

function ProductItemDetails() {
  return (
    <Wrapper>
      <ProductItemDetailsImageSlider />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default ProductItemDetails;
