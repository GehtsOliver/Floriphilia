import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Container, Row, Text } from "atomize";

import ProductItem from "../components/ProductItem";
import PaginationComponent from "../components/Pagination";

const ShopPage = () => {
  const { products } = useContext(ShopContext);
  const [productsIndex, setProductsIndex] = useState(0);
  const [productsToRender, setProductsToRender] = useState(9);

  let productsMarkUp = [];

  useEffect(() => {
    productsMarkUp = [];
  }, [productsToRender, productsIndex]);

  for (let i = productsIndex; i < productsToRender; i++) {
    productsMarkUp.push(<ProductItem key={i} product={products[i]} />);
  }

  const increaseProductsToRender = () => {
    if (productsToRender < products.length) {
      setProductsToRender(productsToRender + 8);
      setProductsIndex(productsIndex + 8);
    }
  };

  const decreaseProductsToRender = () => {
    if (productsToRender > 8 && productsIndex > 0) {
      setProductsToRender(productsToRender - 8);
      setProductsIndex(productsIndex - 8);
    }
  };

  if (!products) return <Text>Loading...</Text>;
  return (
    <Container minH="78vh">
      <Row>{productsMarkUp}</Row>
      <PaginationComponent
        nextProducts={increaseProductsToRender}
        backProducts={decreaseProductsToRender}
        productsMin={productsIndex}
      />
    </Container>
  );
};

export default ShopPage;
