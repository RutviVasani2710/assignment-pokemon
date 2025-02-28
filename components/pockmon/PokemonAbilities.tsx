import { VStack, HStack, Text, Badge } from "@chakra-ui/react";

export default function PokemonAbilities({ abilities }: { abilities: any[] }) {
  return (
    <VStack align="start" gap={2}>
      <Text fontSize="lg" fontWeight="bold">
        Abilities:
      </Text>
      <HStack wrap="wrap">
        {abilities.map((a) => (
          <Badge key={a.ability.name} colorScheme="green">
            {a.ability.name}
          </Badge>
        ))}
      </HStack>
    </VStack>
  );
}
