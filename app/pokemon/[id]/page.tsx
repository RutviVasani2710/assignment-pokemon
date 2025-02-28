import { fetchPokemonDetails } from "@/app/api/services";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import PokemonTypes from "@/components/pockmon/PokemonTypes";
import PokemonAbilities from "@/components/pockmon/PokemonAbilities";
import PokemonStats from "@/components/pockmon/PokemonStats";
import PokemonMoves from "@/components/pockmon/PokemonMoves";

export default async function PokemonDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const pokemon = await fetchPokemonDetails(id);

  return (
    <Box
      maxW="600px"
      mx="auto"
      p={5}
      textAlign="center"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
    >
      <Link href="/">
        <Button colorScheme="blue" mb={4}>
          ← Back
        </Button>
      </Link>

      <Text fontSize="3xl" fontWeight="bold" textTransform="capitalize">
        {pokemon.name}
      </Text>

      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        mx="auto"
        boxSize="150px"
        borderRadius="full"
        bg="gray.100"
      />

      <PokemonTypes types={pokemon.types} />

      <Box height="1px" bg="gray.300" my={3} />

      <PokemonAbilities abilities={pokemon.abilities} />

      <Box height="1px" bg="gray.300" my={3} />

      <PokemonStats stats={pokemon.stats} />

      <Box height="1px" bg="gray.300" my={3} />

      <PokemonMoves moves={pokemon.moves} />
    </Box>
  );
}
