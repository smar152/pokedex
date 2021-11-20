import React, { Component } from "react";
import styled from "styled-components";

const PokeCard = styled("div")`
  margin: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: lightblue;
`;
const DataItem = styled("div")``;

const convert = (number) => {
  const numZeroes = Math.max(0, 3 - String(number).length);
  return "0".repeat(numZeroes) + number;
};

class Pokemon extends Component {
  render() {
    const { name, id, type, base_experience: xp } = this.props.pokemon;
    console.log(this.props.pokemon);
    return (
      <div>
        <PokeCard>
          <DataItem>{name}</DataItem>
          <DataItem>
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${convert(
                id
              )}.png`}
              alt=""
            />
          </DataItem>
          <DataItem>{type}</DataItem>
          <DataItem>{xp}</DataItem>
        </PokeCard>
      </div>
    );
  }
}

export default Pokemon;
