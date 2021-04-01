import React, { useState } from "react";
import Card from "./Card";

const PokemonList = ({ pokemon }) => {
  const [showCard, setShowCard] = useState(false);

  const handleShowCard = () => {
    setShowCard((prev) => !prev);
  };

  let pokemonTypeStyle = `pokedex__item--info ${pokemon.types[0].type.name}`;

  return (
    <>
      <div className='pokedex__item' onClick={handleShowCard}>
        <div className='pokedex__item--image'>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <div className='pokedex__item--id'>#{pokemon.id}</div>
        </div>
        <div className={pokemonTypeStyle}>
          <div className='pokedex__item--name'>
            <label>{pokemon.name}</label>
          </div>
        </div>
      </div>

      <Card showCard={showCard} setShowCard={setShowCard} pokemon={pokemon} />
    </>
  );
};

export default PokemonList;
