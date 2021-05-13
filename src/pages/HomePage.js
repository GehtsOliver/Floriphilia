import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import styled from "styled-components";

import CallToAction from "../components/CallToAction";
import TickerComponent from "../components/Ticker";
import { Icon } from "atomize";
import { toast } from "react-toastify";

const Main = styled("main")`
  min-height: 92vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const Container = styled("section")`
  width: 100vw;
  display: flex;
  padding: 2rem 0;
  justify-content: center;
  column-gap: 8rem;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Text = styled("p")`
  width: 45vw;
  font-size: 1.1rem;
  line-height: 1.8;

  @media (max-width: 700px) {
    position: relative;
    top: 15rem;
    margin-bottom: 17rem;
  }

  span {
    font-size: 1.5rem;
    color: #008000;
    margin-right: 3px;
  }
`;

const HomePage = () => {
  const { products } = useContext(ShopContext);

  useEffect(() => {
    toast.success("Welcome to Floriphilia's Shop 🌹");
  }, []);

  if (!products) return <Text>Loading...</Text>;
  return (
    <Main>
      <TickerComponent />
      <Container>
        <CallToAction link="/shop">
          Shop <Icon color="white" name="Store" size="2rem" />
        </CallToAction>
        <Text>
          <span>O</span>rdering flowers online and sending a bouquet is more
          than just a simple gift. Flowers also express your best wishes, your
          kind thoughts and your thoughtful words. On any occasion, delivering
          flowers can help ensure that a special day is remembered for years to
          come: from welcoming a new addition to the family to congratulating
          someone on a new job or sending thank you flowers in appreciation of
          the help someone has given you. <br></br>
          <br></br>
          <span>T</span>hanks to our experienced florists who use only the best
          and freshest flowers direct from the grower or gardener, your bouquet
          can last a long time and is sure to be remembered for years to come.
          Besides the convenience of ordering flowers online, our flowers are
          also hard to beat for freshness. Only flowers of perfect quality are
          used for your bouquet. Our hand-delivered gifts show care and thought.
          Ordering flowers online doesn't have to seem impersonal, because our
          florists fully understand that every occasion flowers are sent for is
          a special one.
        </Text>
      </Container>
    </Main>
  );
};

export default HomePage;
