import React, { useRef } from "react";
import "./pokemon.css";

const Card = ({ showCard, setShowCard, pokemon }) => {
  const cardRef = useRef();
  const closeCardOnOutsideClick = (e) => {
    if (cardRef.current === e.target) {
      setShowCard(false);
    }
  };
  let cardInfoStyle = `card__info ${pokemon.types[0].type.name}`;
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
            <div className={cardInfoStyle}>
              <div className='card__info--row'>
                <strong>Height:</strong> {pokemon.height}
                <strong>Weight:</strong> {pokemon.weight}
              </div>

              <div className='card__info--row'>
                <strong>Abilities:</strong>
                <ul>
                  {pokemon.abilities.map((abi, i) => (
                    <li key={i}>{abi.ability.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='card__close' onClick={() => setShowCard(false)}>
              <img src='close-btn.png' alt='Close icon' />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Card;
