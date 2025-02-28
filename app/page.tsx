import { Box } from "@chakra-ui/react";
import PokemonList from "@/components/PokemonList";
import { fetchPokemons } from "./api/services";


export default async function HomePage() {
  const data = await fetchPokemons(); 
  return (
    <Box p={5}>
      <PokemonList pokemons={data} />
    </Box>
  );
}
