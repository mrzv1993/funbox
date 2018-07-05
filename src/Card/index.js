import React from "react";
import styled from "styled-components";

import cat from "../img/cat.png";

const hoverGradient =
  "linear-gradient(to bottom right, transparent 24px, #EAB05A 24px)";

const Border = styled.div`
  height: 480px;
  width: 320px;
  position: relative;
  border-radius: 8px;
  margin-right: 24px;
  margin-top: 24px;
  cursor: pointer;

  &:hover {
    background: ${hoverGradient};
  }
`;

const Background = styled.div`
  background-image: url(${cat});
  background-image: url(${cat}),
    linear-gradient(to bottom right, transparent 24px, #f2f2f2 24px);
  height: 472px;
  width: 312px;
  border-radius: 6px;
  position: absolute;
  top: 4px;
  left: 4px;
  color: #000;
`;

const Content = styled.p`
  display: block;
  margin-left: 40px;
`;

class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      black: true
    };
  }

  changeColor() {
    this.setState({ black: !this.state.black });
  }

  render() {
    const btn_class = this.state.black ? "blackButton" : "whiteButton";

    return (
      <div>
        <Border className={btn_class} onClick={this.changeColor.bind(this)}>
          <Background>
            <Content>
              <p>Сказачное заморское явство</p>
              <h2>
                <span>Нямушка</span>
                <br />
                {this.props.card.taste}
              </h2>
              <p>{this.props.card.bonus}</p>
            </Content>
          </Background>
        </Border>
      </div>
    );
  }
}

export default Card;
