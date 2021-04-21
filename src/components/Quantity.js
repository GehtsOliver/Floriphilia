import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../context/ShopContext";

const QuantityComponent = styled("div")`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  column-gap: 0.5rem;

  margin-bottom: 0.5rem;

  button {
    width: 2rem;
    height: 2rem;
    color: black;
    background: transparent;
    font-size: 1rem;
    cursor: pointer;
    border: none;
  }

  p {
    font-size: 1rem;
    font-weight: bold;
  }
`;

const Quantity = ({ item }) => {
  const { updateLineItems } = useContext(ShopContext);

  return (
    <QuantityComponent>
      <button
        onClick={() => {
          updateLineItems(item.id, item.quantity - 1);
        }}
      >
        -
      </button>
      <p>{item.quantity}</p>
      <button
        onClick={() => {
          updateLineItems(item.id, item.quantity + 1);
        }}
      >
        +
      </button>
    </QuantityComponent>
  );
};

export default Quantity;
