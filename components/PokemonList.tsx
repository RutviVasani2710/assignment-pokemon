"use client";

import { useMemo, useState } from "react";
import { Box, Input, SimpleGrid } from "@chakra-ui/react";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemons }: { pokemons: any[] }) {
  const [search, setSearch] = useState("");

  const filteredPokemons = useMemo(() => {
    if (pokemons) {
      if (search) {
        return pokemons?.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase())
        );
      } else {
        return pokemons;
      }
    } else {
      return [];
    }
  }, [pokemons, search]);

  return (
    <Box>
      <Input
        placeholder="Search Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        mb={5}
      />

      <SimpleGrid columns={[1, 2, 3, 4]} gap={5}>
        {filteredPokemons?.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
