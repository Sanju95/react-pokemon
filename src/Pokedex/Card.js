import React, { useRef } from "react";
import "./pokemon.css";

const Card = ({ showCard, setShowCard, pokemon }) => {
  const cardRef = useRef();
  const closeCardOnOutsideClick = (e) => {
    if (cardRef.current === e.target) {
      setShowCard(false);
    }
  };
  let cardStyle = `card__wrapper ${pokemon.types[0].type.name}`;
  return (
    <>
      {showCard ? (
        <div
          className='card__bg'
          ref={cardRef}
          onClick={closeCardOnOutsideClick}
        >
          <div className='card__wrapper'>
            <img
              className='card--image'
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
            <h1>{pokemon.name}</h1>
            <strong>{pokemon.types[0].type.name}</strong>
            <div className='cardInfo'>
              <p>
                <strong>Height:</strong> {pokemon.height}
              </p>
              <p>
                <strong>Weight:</strong> {pokemon.weight}
              </p>
              <div>
                <p>
                  <strong>Abilities:</strong>
                </p>
                {pokemon.abilities.map((abi, i) => (
                  <p key={i}>{abi.ability.name}</p>
                ))}
              </div>
              <p>
                <strong>Type:</strong>
                {pokemon.types[0].type.name}
              </p>
            </div>
            <div className='card__close' onClick={() => setShowCard(false)}>
              <img src='close-btn.png' />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Card;
