import React from "react";
import pokemonList from "../data/pokemonList";
import styled from "styled-components";
import Pokedex from "./Pokedex";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  background-color: #f2f2f2;
`;

// function getRandomPokemon() {
//   return pokemonList[Math.floor(Math.random() * pokemonList.length)];
// }
function getRandomPokemons(n) {
  const pokemans = [];
  let totalXP = 0;
  for (let i = 0; i < n; i++) {
    let randomPokemon =
      pokemonList[Math.floor(Math.random() * pokemonList.length)];
    pokemans.push(randomPokemon);
    totalXP += randomPokemon.base_experience;
  }
  // console.log("pokemans: ", pokemans);
  return { pokemans, totalXP };
}

class Pokegame extends React.Component {
  constructor() {
    super();
    this.hand = getRandomPokemons(4);
  }
  render() {
    // console.log(this.hand);
    return (
      <Container>
        <Pokedex hand={this.hand} />
      </Container>
    );
  }
}
export default Pokegame;
