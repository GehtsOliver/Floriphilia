import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../context/ShopContext";

import { Icon } from "atomize";

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  h3 {
    font-size: 1rem;
  }
  padding: 1.5rem 0;
`;

const Control = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :disabled {
    color: white;
  }
`;

const PaginationComponent = ({ nextProducts, backProducts, productsMin }) => {
  const { products } = useContext(ShopContext);
  const productsMax = productsMin + 8;

  return (
    <Container>
      <Control
        disabled={productsMin === 0}
        onClick={() => backProducts()}
        bg="#BC986A"
      >
        <Icon name="LeftArrow" size="1.5rem" />
      </Control>
      <div>
        <h3>
          {productsMin} - {productsMax}
        </h3>
      </div>

      <Control
        disabled={productsMax >= products.length}
        onClick={() => nextProducts()}
        bg="#BC986A"
      >
        <Icon name="RightArrow" size="1.5rem" />
      </Control>
    </Container>
  );
};

export default PaginationComponent;
