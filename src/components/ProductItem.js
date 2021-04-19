import { Col, Div, Row, Text } from "atomize";
import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <>
      <Col key={product.id} size="3">
        <Link to={`/product/${product.id}`}>
          <Div p="2rem">
            <Div h="20rem" bgSize="cover" bgPos="center center" shadow="3" hoverShadow="4" transition="0.3s" m={{ b: "1.5rem"}} bgImg={product.images[0].src}></Div>
            <Row>
              <Text>{product.title}</Text>
            </Row>
            <Row>
              <Text>{product.variants && product.variants[0].price}</Text>
            </Row>
          </Div>
        </Link>
      </Col>
    </>
  );
};

export default ProductItem;
