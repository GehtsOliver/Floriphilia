import { Div, Text, Icon, Row, Anchor } from "atomize";
import React from "react";
import styled from "styled-components";

const HorizontalRow = styled("hr")`
  width: 100%;
`;

const Footer = ({ className }) => {
  return (
    <Div className={className}>
      <HorizontalRow />
      <Row
        d="flex"
        justify="center"
        m={{ t: "1rem" }}
        style={{ columnGap: "1rem" }}
      >
        <Anchor href="https://www.instagram.com/gehts.o/">
          <Icon color="black" name="Instagram" size="2rem" />
        </Anchor>
        <Anchor href="https://www.linkedin.com/in/oliver-gr%C3%A4tz-a360aa155/">
          <Icon color="black" name="Linkedin" size="2rem" />
        </Anchor>
        <Anchor href="mailto:mail@Olivergraetz.com">
          <Icon color="black" name="Email" size="2rem" />
        </Anchor>
      </Row>
      <Row style={{marginTop: "2rem"}}>
        <Text m="auto" textColor="black" textSize="1.1rem" tag="h2">
          Floriphilia ©
        </Text>
        <Text m="auto" textColor="black" textSize="1.1rem" tag="h2">
          Code and Design by{" "} 
          <Anchor textColor="white" textDecor="underline" href="https://olivergraetz.com">Oliver Grätz</Anchor>👨
        </Text>
      </Row>
    </Div>
  );
};

const StyledFooter = styled(Footer)`
  padding: 2rem 10vw;
  display: flex;
  background: #029E48;
  flex-direction: column;
  min-height: 15rem;
  color: #000 !important;
`;

export default StyledFooter;
