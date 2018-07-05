import React from "react";
import styled from "styled-components";

const Main = styled.section`
  padding: 40px;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Border = styled.div`
  height: 480px;
  width: 320px;
  position: relative;
  border-radius: 8px;
  background: linear-gradient(to bottom right, transparent 25px, #1698d9 25px);
  cursor: pointer;
  margin-right: 24px;
  margin-top: 24px;

  &:hover {
    background: linear-gradient(
      to bottom right,
      transparent 25px,
      #eab05a 25px
    );
  }
`;

const Card = styled.div`
  background: linear-gradient(to bottom right, transparent 25px, #f2f2f2 25px);
  height: 472px;
  width: 312px;
  color: #000000;
  border-radius: 6px;
  position: absolute;
  top: 4px;
  left: 4px;
`;

const Content = styled.p`
  display: block;
  margin-left: 40px;
`;

const App = () => (
  <Main>
    <h1>Ты сегодня покормил кота?</h1>
    <Cards>
      <Border>
        <Card>
          <Content>saasdsadd</Content>
        </Card>
      </Border>
      <Border>
        <Card>
          <Content>saasdsadd</Content>
        </Card>
      </Border>
      <Border>
        <Card>
          <Content>saasdsadd</Content>
        </Card>
      </Border>
    </Cards>
  </Main>
);

export default App;
