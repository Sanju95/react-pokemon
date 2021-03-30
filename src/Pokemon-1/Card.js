import React from "react";

const Card = ({ pokemon }) => {
  return (
    <div>
      <ul>
        <li>#{pokemon.id}</li>
        <li>{pokemon.name}</li>
        <li>{pokemon.weight}</li>
        <li>{pokemon.height}</li>
        <li>
          {pokemon.abilities.map((abi, i) => {
            return (
              <ul key={i}>
                <li>{abi.ability.name}</li>
              </ul>
            );
          })}
        </li>
        <li>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
          />
        </li>
      </ul>
    </div>
  );
};

export default Card;
