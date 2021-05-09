import { Div, Row, Text } from "atomize";
import React, { useContext } from "react";
import Ticker from "react-ticker";
import { ShopContext } from "../context/ShopContext";
import styled from "styled-components";

const Flex = styled("div")`
  height: 10rem;
  display: flex;
  align-items: center;
  column-gap: 3rem;
  padding-left: 5rem;
  padding-right: 5rem;
`;

const ImageContainer = styled("div")`
  width: 15rem;
  div:hover {
    transform: scale3d(1.1, 1.1, 1.1);
    transition: all 500ms;
    cursor: pointer;
  }
`;

const ProductDescription = styled("h3")`
  
  font-size: 1rem;
  color: black !important;
  visibility: hidden;

  width: 100%;
  :hover {
    visibility: visible;
  }
`;

const TickerComponent = () => {
  const { products } = useContext(ShopContext);
  return (
    <Div bg="white" p=".5rem 0">
      <Ticker speed={15}>
        {() => (
          <Flex>
            {products &&
              products.map((product) => (
                <a href={`/product/${product.id}`}>
                  <ImageContainer>
                    <Div
                      h="10rem"
                      bgSize="cover"
                      bgPos="center"
                      bgImg={product.images[0].src}
                    >
                      <ProductDescription>{product.title}</ProductDescription>
                    </Div>
                  </ImageContainer>
                </a>
              ))}
          </Flex>
        )}
      </Ticker>
    </Div>
  );
};

export default TickerComponent;
