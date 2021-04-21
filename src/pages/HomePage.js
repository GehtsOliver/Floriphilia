import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Container, Row, Text } from "atomize";

import ProductItem from "../components/ProductItem";
import Footer from "../components/Footer";
import PaginationComponent from "../components/Pagination";

const HomePage = () => {
  const { fetchProducts, products } = useContext(ShopContext);
  const [productsIndex, setProductsIndex] = useState(0);
  const [productsRender, setProductsRender] = useState(9);

  let productsMarkUp = [];

  useEffect(() => {
    fetchProducts();
    return () => {};
  }, [fetchProducts]);

  useEffect(() => {
    productsMarkUp = [];
  }, [productsRender, productsIndex]);

  for (let i = productsIndex; i < productsRender; i++) {
    productsMarkUp.push(<ProductItem key={i} product={products[i]} />);
  }

  const increaseProductsToRender = () => {
    if (productsRender < products.length) {
      setProductsRender(productsRender + 8);
      setProductsIndex(productsIndex + 8);
    }
  };

  const decreaseProductsToRender = () => {
    if (productsRender > 8) {
      setProductsRender(productsRender - 8);
      setProductsIndex(productsIndex - 8);
    }
  };

  if (!products) return <Text>Loading...</Text>;
  return (
    <>
      <Container>
        <Row>{productsMarkUp}</Row>
        <PaginationComponent
          nextProducts={increaseProductsToRender}
          backProducts={decreaseProductsToRender}
          productsMin={productsIndex}
        />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
