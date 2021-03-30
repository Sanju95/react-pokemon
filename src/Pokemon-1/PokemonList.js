import React from "react";

const PokemonList = ({ pokemon }) => {
  const handleClick = () => {
    console.log("HandleClick!");
  };
  return (
    <div className='pokedex__item' onClick={handleClick}>
      <div className='pokedex__item--id'>{pokemon.id}</div>
      <div className='pokedex__item--image'>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className='pokedex__item--name'>
        <label>{pokemon.name}</label>
      </div>
    </div>
  );
};

export default PokemonList;
