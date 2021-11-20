import React, { Component } from "react";
import Pokemon from "./Pokemon.js";
import pokemonList from "../data/pokemonList.js";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

class Pokedex extends Component {
  render() {
    return (
      <Container>
        {pokemonList.map((p) => {
          return <Pokemon key={p.id} pokemon={p} />;
        })}
      </Container>
    );
  }
}

export default Pokedex;
