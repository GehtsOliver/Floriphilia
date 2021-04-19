import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { Container, Text, Row } from "atomize";
import ProductItem from "../components/ProductItem";

const HomePage = () => {
  const { fetchProducts, products } = useContext(ShopContext);

  useEffect(() => fetchProducts(), [fetchProducts]);

  if (!products) return <Text>Loading...</Text>;
  return (
    <Container>
      <Row>
        {products &&
          products.map((product) => <ProductItem product={product} />)}
      </Row>
    </Container>
  );
};

export default HomePage;
