import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "../Api/axios";
import "./pokemon.css";

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGen1Pokemons();
  }, []);

  const getGen1Pokemons = async () => {
    const request = await axios.get().catch((err) => setLoading(true));
    getPokemonData(request.data.results);
  };

  const getPokemonData = async (results) => {
    const request = await Promise.all(
      results.map(
        async (p) => await axios.get(p.url).catch((err) => setLoading(true)),
      ),
    );
    const data = request.map((p) => p.data);
    request ? setLoading(false) : setLoading(true);
    setPokemonData(data);

    //console.log(data);
  };

  const filteredPokemons = pokemonData.filter((pokemon) => {
    return pokemon.name.includes(search);
  });

  return (
    <div>
      <div className='pokedex__search'>
        <input
          type='text'
          placeholder='Search pokemon'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading && <div className='loader'></div>}

      <div className='pokedex__container'>
        {search && filteredPokemons.length === 0 && <h2>No pokemons found</h2>}
        {filteredPokemons.map((pokemon, i) => {
          return <PokemonList key={i} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
};

export default Pokedex;
