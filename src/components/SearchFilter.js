import React, { useState } from "react";

const SearchFilter = ({ pokemonData }) => {
  const [search, setSearch] = useState("");

  const filteredPokemons = pokemonData.filter((pokemon) => {
    return pokemon.name.includes(search);
  });

  return (
    <div className='pokedex__search'>
      <input
        type='text'
        placeholder='Search pokemon'
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;
