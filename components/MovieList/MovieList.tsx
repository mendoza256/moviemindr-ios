import type { CardProps } from "tamagui";

import { XStack, YStack } from "tamagui";
import { DemoCard } from "./MovieCard";

export function MovieList({ movies }: { movies: CardProps[] }): JSX.Element {
  return (
    <YStack paddingHorizontal="$4" paddingVertical="$4">
      <XStack flex={1} flexWrap="wrap" flexDirection="row" gap="$3">
        {movies.map((movie) => (
          <DemoCard movie={movie} size="$5" flexGrow={1} flexBasis={170} />
        ))}
      </XStack>
    </YStack>
  );
}
