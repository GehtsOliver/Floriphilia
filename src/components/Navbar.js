import React, { useContext } from "react";
import { Anchor, Icon, Div, Text } from "atomize";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ShopContext } from "../context/ShopContext";

const Navbar = styled("nav")`
  background: #02da63;
  display: flex;
  padding: 1.5rem 5rem;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: transparent !important;
    display: flex;

    svg {
      margin-left: 0.5rem;
    }

    :hover {
      color: inherit !important;
    }
  }
`;

const NavbarComponent = () => {
  const { openCart } = useContext(ShopContext);

  return (
    <Navbar>
      <Div d="flex" style={{ columnGap: "2rem" }}>
        <Text tag="h1" textSize="1.5rem" textColor="#05386B">
          Floriphilia 🌹
        </Text>
        <Link to="/">
          <Text
            style={{ display: "flex", alignItems: "center" }}
            textSize="1rem"
            tag="h3"
          >
            Home <Icon color="#05386b" name="HomeSolid" size="1.8rem" />
          </Text>
        </Link>
        <Link to="/shop" style={{ display: "flex" }}>
          <Text
            style={{ display: "flex", alignItems: "center" }}
            textSize="1rem"
            tag="h3"
          >
            Shop <Icon color="#05386b" name="Store" size="1.8rem" />
          </Text>
        </Link>
      </Div>
      <Anchor onClick={() => openCart()} d="flex">
        <Text
          style={{ display: "flex", alignItems: "center" }}
          textSize="1rem"
          tag="h3"
        >
          Cart <Icon color="#05386b" name="Bag" size="1.8rem" />
        </Text>
      </Anchor>
    </Navbar>
  );
};

export default NavbarComponent;
