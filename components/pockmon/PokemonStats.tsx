import { VStack, Text } from "@chakra-ui/react";

export default function PokemonStats({ stats }: { stats: any[] }) {
  return (
    <VStack align="start" gap={2}>
      <Text fontSize="lg" fontWeight="bold">
        Stats:
      </Text>
      {stats.map((s) => (
        <Text key={s.stat.name}>
          <strong>{s.stat.name.toUpperCase()}:</strong> {s.base_stat}
        </Text>
      ))}
    </VStack>
  );
}
