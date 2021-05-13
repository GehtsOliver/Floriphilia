import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Col, Container, Row, Div, Text, Button, Icon } from "atomize";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const ProductPage = () => {
  const { fetchProductById, product, addLineItem } = useContext(ShopContext);
  const { id } = useParams();

  useEffect(() => fetchProductById(id), [fetchProductById, id]);
  console.log(product);
  return (
    <Container minH="92vh" p={{ y: "2.8rem" }}>
      <Row d="flex"  flexDir="column" align="center" style={{ rowGap: "3rem" }}>
        <Col>
          {product.images && (
            <Div
              h="50vh"
              w="50vw"
              bgPos="center center"
              bgImg={product.images[0].src}
            ></Div>
          )}
        </Col>
        <Col
          style={{ rowGap: "1rem" }}
          d="flex"
          flexDir="column"
          justify="center"
        >
          <Text textSize="1.5rem" tag="h1" m={{ b: "0.5rem" }}>
            {product.title}
          </Text>
          <Text textSize="1.2rem" tag="h2">
            {product.variants && product.variants[0].price} €
          </Text>
          <Text textSize="1rem" w="15rem">
            {product.description && product.description}
          </Text>
          <Button bg="#05386B" onClick={() => {
            addLineItem(product.variants[0].id)
            toast.success(`${product.title} added to Cart 🌷`, {
              position: "bottom-left",
            })
            }} w="12rem">
            Add to
            <Icon name="Bag" size="20px" color="white" m={{ l: "0.3rem" }} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
