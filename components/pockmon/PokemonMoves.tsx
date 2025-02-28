import { VStack, HStack, Text, Badge } from "@chakra-ui/react";

export default function PokemonMoves({ moves }: { moves: any[] }) {
  return (
    <VStack align="start" gap={2} maxH="200px" overflowY="auto">
      <Text fontSize="lg" fontWeight="bold">
        Moves:
      </Text>
      <HStack wrap="wrap">
        {moves.slice(0, 10).map((m) => (
          <Badge key={m.move.name} colorScheme="orange">
            {m.move.name}
          </Badge>
        ))}
      </HStack>
    </VStack>
  );
}
