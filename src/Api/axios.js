import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?limit=151",
});

const getPokemons = async () => {
  const request = await axios.get();
  return request.data;
};

export { getPokemons };

export default axios;
