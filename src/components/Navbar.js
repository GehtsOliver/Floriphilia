import React from "react";
import { Container, Icon } from "atomize";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      <Link to="/">
        Cart <Icon name="Bag" size="1.5rem" />
      </Link>
    </Container>
  );
};

export default Navbar;
