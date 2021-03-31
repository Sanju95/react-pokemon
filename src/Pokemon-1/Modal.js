import React, { useRef } from "react";
import "./pokemon.css";

const Modal = ({ showCard, setShowCard, pokemon }) => {
  const cardRef = useRef();
  const closeCardOnOutsideClick = (e) => {
    if (cardRef.current === e.target) {
      setShowCard(false);
    }
  };
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
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
            <h1>{pokemon.name}</h1>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <div>
              Abilities:{" "}
              {pokemon.abilities.map((abi, i) => (
                <p key={i}>{abi.ability.name}</p>
              ))}
            </div>
            <div className='card__close'>
              <button onClick={() => setShowCard(false)}>X</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
