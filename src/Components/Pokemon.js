import React, { Component } from "react";
import styled from "styled-components";

const PokeCard = styled("div")`
  margin: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  filter: drop-shadow(10px 10px 5px gray);
`;
const DataTitle = styled("h2")`
  font-weight: 400;
`;

const DataItem = styled("div")``;

const DataImage = styled("div")`
  background-color: #f2f2f2;
  padding: 20px;
`;

const convert = (number) => {
  const numZeroes = Math.max(0, 3 - String(number).length);
  return "0".repeat(numZeroes) + number;
};

class Pokemon extends Component {
  render() {
    const { name, id, type, base_experience: xp } = this.props.pokemon;
    // console.log(this.props.pokemon);
    return (
      <div>
        <PokeCard>
          <DataImage>
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${convert(
                id
              )}.png`}
              alt="pokemon"
              width="150px"
            />
          </DataImage>
          <DataTitle>{name}</DataTitle>
          <DataItem>Type: {type}</DataItem>
          <DataItem>EXP: {xp}</DataItem>
        </PokeCard>
      </div>
    );
  }
}

export default Pokemon;
