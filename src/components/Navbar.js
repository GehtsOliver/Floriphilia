import React, { useContext } from "react";
import { Anchor, Icon, Div, Text } from "atomize";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ShopContext } from "../context/ShopContext";

const Navbar = styled("nav")`
  background: #02da63;
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  align-items: center;
  width: 90vw;

  @media (max-width: 700px) {
    padding: 1rem;
  }

  h3 {
    color: transparent !important;
    display: flex;

    svg {
      margin-left: 1rem;
    }

    :hover {
      color: white !important;
    }
  }
`;

const NavbarComponent = () => {
  const { openCart } = useContext(ShopContext);

  return (
    <Navbar>
      <Div d="flex" style={{ columnGap: "2.5rem" }}>
        <Text
          d="flex"
          align="center"
          tag="h1"
          textSize="1.5rem"
          textColor="#008000"
          style={{ whiteSpace: "nowrap" }}
        >
          Floriphilia 🌹
        </Text>
        <Link to="/">
          <Icon color="#008000" name="HomeSolid" size="1.8rem" />
        </Link>
        <Link to="/shop" style={{ display: "flex", alignItems: "center" }}>
          <Icon color="#008000" name="Store" size="1.8rem" />
        </Link>
      </Div>
      <Anchor onClick={() => openCart()} d="flex">
        <Icon color="#008000" name="Bag" size="1.8rem" />
      </Anchor>
    </Navbar>
  );
};

export default NavbarComponent;
