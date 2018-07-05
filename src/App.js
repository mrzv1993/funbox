import React from "react";
import styled from "styled-components";

import Card from "./Card";

const Main = styled.section`
  padding: 40px;
  text-align: center;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: left;
`;

const content = [
  {
    taste: "c фуа-гра",
    bonus: "10 порций, мышь в подарок"
  },
  {
    taste: "с рыбой",
    bonus: "40 порций, 2 мыши в подарок"
  },
  {
    taste: "с курой",
    bonus: "100 порций, 5 мышей в подарок заказчик доволен"
  }
];

export default () => {
  return (
    <Main>
      <h1>Ты сегодня покормил кота?</h1>
      <Cards>
        <Card card={content[0]} />
        <Card card={content[1]} />
        <Card card={content[2]} />
      </Cards>
    </Main>
  );
};
