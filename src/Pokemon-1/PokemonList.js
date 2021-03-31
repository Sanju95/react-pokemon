import React, { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";

const PokemonList = ({ pokemon }) => {
  const [cardInfo, setCardInfo] = useState([]);
  const [showCard, setShowCard] = useState(false);

  const handleShowCard = () => {
    setShowCard((prev) => !prev);
    setCardInfo(pokemon);
  };

  return (
    <>
      <div className='pokedex__item' onClick={handleShowCard}>
        <div className='pokedex__item--id'>{pokemon.id}</div>
        <div className='pokedex__item--image'>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div className='pokedex__item--name'>
          <label>{pokemon.name}</label>
        </div>
      </div>

      <Modal showCard={showCard} setShowCard={setShowCard} pokemon={pokemon} />
    </>
  );
};

export default PokemonList;
