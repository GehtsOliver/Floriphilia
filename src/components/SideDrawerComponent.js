import React, { useContext } from "react";
import { Col, Div, Row, SideDrawer, Text, Icon, Anchor } from "atomize";
import { ShopContext } from "../context/ShopContext";
import Quantity from "./Quantity";

const SideDrawerComponent = () => {
  const { checkout, isCartOpen, closeCart } = useContext(ShopContext);
  return (
    <SideDrawer
      d="flex"
      flexDir="column"
      justify="space-between"
      isOpen={isCartOpen}
      onClose={closeCart}
    >
      <Div>
        {checkout.lineItems &&
          checkout.lineItems.map((item) => {
            return (
              <Row m={{ b: "1rem" }} key={item.id}>
                <Col>
                  <Div
                    h={"5rem"}
                    bgPos="center"
                    bgSize="cover"
                    bgImg={item.variant.image.src}
                  ></Div>
                </Col>
                <Col>
                  <Text tag="h3">{item.title}</Text>
                  <Quantity item={item} />
                  <Text tag="h4">{item.variant.price * item.quantity} €</Text>
                </Col>
              </Row>
            );
          })}
      </Div>
      <Div>
        <Row p={{ x: "2rem", y: "1rem" }} d="flex" justify="space-between">
          <Text tag="h2">Total price:</Text>
          <Text tag="h2" textSize="1.2rem">
            {checkout.totalPrice} €
          </Text>
        </Row>
        <Anchor
          href={checkout.webUrl}
          p="1rem"
          bg="black"
          d="flex"
          justify="center"
          align="center"
        >
          <Text textColor="white" textSize="1.4rem" tag="h2">
            Checkout
          </Text>
          <Icon color="white" name="Card" size="1.4rem" m={{ l: ".3rem" }} />
        </Anchor>
      </Div>
    </SideDrawer>
  );
};

export default SideDrawerComponent;
