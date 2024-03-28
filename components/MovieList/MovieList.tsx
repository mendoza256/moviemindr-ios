import type { CardProps } from "tamagui";
import { XStack, YStack } from "tamagui";
import { MovieCard } from "./MovieCard";
import { MovieType } from "../../lib/baseTypes";

interface MovieListProps extends CardProps {
  movies: MovieType[];
}

export function MovieList({ movies }: MovieListProps): JSX.Element {
  return (
    <YStack paddingHorizontal="$4" paddingVertical="$4">
      <XStack flex={1} flexWrap="wrap" flexDirection="row" gap="$3">
        {movies.map((movie, i) => (
          <MovieCard
            movie={movie}
            key={i}
            size="$5"
            flexGrow={1}
            flexBasis={170}
            borderRadius={20}
          />
        ))}
      </XStack>
    </YStack>
  );
}
