import { Box, Text, Button, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function PokemonCard({ pokemon }: { pokemon: any }) {
  const pokemonId = pokemon.url.split("/").filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={5}
      textAlign="center"
      boxShadow="md"
    >
      <Image
        src={imageUrl}
        alt={pokemon.name}
        width={100}
        height={100}
        mx="auto"
      />

      <Text fontSize="lg" fontWeight="bold" mt={2}>
        {pokemon.name.toUpperCase()}
      </Text>

      <Link href={`/pokemon/${pokemon.name}`} legacyBehavior    >
        <Button colorScheme="blue" mt={3}>
          View Details
        </Button>
      </Link>
    </Box>
  );
}
