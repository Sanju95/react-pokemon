import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./PokemonList";
import "./pokemon.css";

const Pokedex = () => {
  const endPoint = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const [pokemonData, setPokemonData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGen1Pokemons();
  }, []);

  const getGen1Pokemons = async () => {
    let res = await axios.get(endPoint);
    let data = res.data;
    await getPokemonData(data.results);
  };

  const getPokemonData = async (results) => {
    let res = await Promise.all(results.map((p) => axios.get(p.url)));
    let data = res.map((p) => p.data);

    console.log(data);
    setLoading(false);
    setPokemonData(data);
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

      {loading ? <div className='loader'></div> : null}

      <div className='pokedex__container'>
        {filteredPokemons.map((pokemon, i) => {
          return <PokemonList key={i} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
};

export default Pokedex;
