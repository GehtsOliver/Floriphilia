import React, { useContext } from "react";
import { toast } from "react-toastify";
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
    color: white;
    background: transparent;
    font-size: 1.1rem;
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
          toast.success(`${item.title} removed from Cart 🥀`, {
            position: "bottom-left",
          });
          updateLineItems(item.id, item.quantity - 1);
        }}
      >
        -
      </button>
      <p>{item.quantity}</p>
      <button
        onClick={() => {
          toast.success(`${item.title} added to Cart 🌺`, {
            position: "bottom-left",
          });
          updateLineItems(item.id, item.quantity + 1);
        }}
      >
        +
      </button>
    </QuantityComponent>
  );
};

export default Quantity;
