import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PokemonList from "./Pokemon-1/PokemonList";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then((res) => {
      setPokemon(res.data.results.map((p) => p.name));
    });
  }, []);

  return <PokemonList pokemon={pokemon} />;
}

export default App;
