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
function getRandomPokemons(n, list) {
  const pokemans = [];
  let totalXP = 0;

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * list.length);
    const randomPokemon = list.splice(randomIndex, 1)[0];
    pokemans.push(randomPokemon);
    totalXP += randomPokemon.base_experience;
  }
  // console.log("pokemans: ", pokemans);
  return { pokemans, totalXP };
}

class Pokegame extends React.Component {
  constructor() {
    super();
    const listClone = [...pokemonList];
    this.hand = getRandomPokemons(4, listClone);
    this.hand2 = getRandomPokemons(4, listClone);
  }
  render() {
    const isAWinner = this.hand.totalXP > this.hand2.totalXP;
    // console.log(this.hand);
    return (
      <Container>
        <Pokedex hand={this.hand} isWinner={isAWinner} />
        <Pokedex hand={this.hand2} isWinner={!isAWinner} />
      </Container>
    );
  }
}
export default Pokegame;
