import api from "./interceptor";

export const fetchPokemons = async () => {
  const response = await api.get("/pokemon?limit=100");
  return response.data.results;
};

export const fetchPokemonDetails = async (name: string) => {
  const response = await api.get(`/pokemon/${name}`);
  return response.data;
};
