import React, { useContext } from "react";
import { Anchor, Container, Icon } from "atomize";
import { Link } from "react-router-dom";

import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const { openCart } = useContext(ShopContext);

  return (
    <Container
      d="flex"
      flexDir="row"
      p="2rem"
      justify="space-between"
      align="center"
    >
      <Link to="/">
        Home <Icon name="HomeSolid" size="1.5rem" />
      </Link>
      <Anchor onClick={() => openCart()}>
        <Icon name="Bag" size="1.5rem" />
      </Anchor>
    </Container>
  );
};

export default Navbar;
