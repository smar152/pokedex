import React, { Component } from "react";
import Pokemon from "./Pokemon.js";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
`;
const RowContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  background-color: #f2f2f2;
`;

class Pokedex extends Component {
  render() {
    return (
      <Container>
        <h1>{this.props.isWinner ? "Winning " : "Losing "}Hand</h1>
        <p>Total XP: {this.props.hand.totalXP}</p>
        <RowContainer>
          {this.props.hand.pokemans.map((p, index) => {
            return <Pokemon key={index} pokemon={p} />;
          })}
        </RowContainer>
      </Container>
    );
  }
}

export default Pokedex;
