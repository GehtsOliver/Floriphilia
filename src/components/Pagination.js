import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../context/ShopContext";

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  h3 {
    font-size: 1rem;
  }
`;

const Control = styled("div")`
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PaginationComponent = ({ nextProducts, backProducts, productsMin }) => {
  const { products } = useContext(ShopContext);
  const productsMax = products.length;

  return (
    <Container>
      <Control
        disabled={productsMin === 0}
        onClick={() => backProducts()}
        bg="#BC986A"
      >
        Back
      </Control>
      <div>
        <h3>
          Products {productsMin} - {productsMax}
        </h3>
      </div>

      <Control
        disabled={productsMax === products.length}
        onClick={() => nextProducts()}
        bg="#BC986A"
      >
        Next
      </Control>
    </Container>
  );
};

export default PaginationComponent;
