import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./Pokemon-1/PokemonList";
import Card from "./Pokemon-1/Card";
import Header from "./components/Header";
import "./Pokemon-1/pokemon.css";

function App() {
  const endPoint = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const [pokemon, setPokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGen1Pokemons();
  }, []);

  const getGen1Pokemons = async () => {
    let res = await axios.get(endPoint);
    let data = await res.data;
    //setPokemon(data.results.map((p) => p.name));
    await getPokemonData(data.results);
    //console.log(res);
  };

  const getPokemonData = async (pData) => {
    let res = await Promise.all(
      pData.map(async (p) => {
        let data = await axios.get(p.url);
        return data;
      }),
    );
    let dataP = res.map((p) => p.data);

    console.log(dataP);

    setPokemonData(dataP);
  };

  return (
    <div>
      <Header />
      <div className='pokedex__container'>
        {pokemonData.map((p, i) => {
          return <PokemonList key={i} pokemon={p} />;
        })}
      </div>
    </div>
  );
}

export default App;
