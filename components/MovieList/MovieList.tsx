import type { CardProps } from "tamagui";

import { Button, Card, H2, Image, Paragraph, XStack } from "tamagui";
import { DemoCard } from "./MovieCard";

export function MovieList({ movies }: { movies: CardProps[] }): JSX.Element {
  return (
    <XStack
      flex={1}
      flexWrap="wrap"
      $sm={{ flexDirection: "row" }}
      paddingHorizontal="$4"
      paddingVertical="$4"
      gap="$1"
      space
    >
      {movies.map((movie) => (
        <DemoCard movie={movie} size="$5" width={176} />
      ))}
    </XStack>
  );
}
