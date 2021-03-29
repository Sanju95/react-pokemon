import React from "react";

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) => (
        <button key={p}>{p}</button>
      ))}
    </div>
  );
}
