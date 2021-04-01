import mockAxios from "axios";
import { getPokemons } from "../Api/axios";

jest.mock("axios", () => {
  return {
    create: jest.fn(() => ({
      get: jest.fn(),
    })),
  };
});

it("get 1st gen pokemons", async () => {
  const pokemons = await getPokemons();

  expect(pokemons).toBe([]);
  console.log(pokemons);
});
