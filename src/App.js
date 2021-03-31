import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./Pokedex/PokemonList";
import Header from "./components/Header";
import "./Pokedex/pokemon.css";

function App() {
  const endPoint = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const [pokemonData, setPokemonData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGen1Pokemons();
  }, []);

  const getGen1Pokemons = async () => {
    let res = await axios.get(endPoint);
    let data = await res.data;
    await getPokemonData(data.results);
    setLoading(false);
  };

  const getPokemonData = async (pData) => {
    let res = await Promise.all(
      pData.map(async (p) => {
        let data = await axios.get(p.url);
        return data;
      }),
    );
    let dataP = res.map((p) => p.data);

    //console.log(dataP);
    setPokemonData(dataP);
  };

  const filteredPokemons = pokemonData.filter((pokemon) => {
    return pokemon.name.includes(search);
  });

  return (
    <div>
      <Header />

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
}

export default App;
