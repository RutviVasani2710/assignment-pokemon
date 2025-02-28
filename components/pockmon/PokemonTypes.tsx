import { HStack, Badge } from "@chakra-ui/react";

export default function PokemonTypes({ types }: { types: any[] }) {
  return (
    <HStack justify="center" my={3}>
      {types.map((t) => (
        <Badge key={t.type.name} colorScheme="purple" fontSize="md">
          {t.type.name}
        </Badge>
      ))}
    </HStack>
  );
}
