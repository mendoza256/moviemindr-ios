import type { CardProps as BaseCardProps } from "tamagui";
import { Button, Card, H6, Image, Paragraph, XStack } from "tamagui";
import { MovieType } from "../../lib/baseTypes";

interface CardProps extends BaseCardProps {
  movie: MovieType;
}

export function MovieCard(props: CardProps) {
  const darkgrey = "#e0e0e0";
  return (
    <Card elevate bordered {...props}>
      <Card.Header padded>
        <H6>{props.movie.title}</H6>

        <Paragraph theme="alt2">Showing at {props.movie.cinemaName}</Paragraph>
        <Paragraph theme="alt2">{props.movie.dateText}</Paragraph>
      </Card.Header>

      <Card.Footer padded>
        <XStack flex={1} />

        <Button borderRadius="$10">Save</Button>
      </Card.Footer>

      <Card.Background backgroundColor={darkgrey} borderRadius={8}>
        <Image resizeMode="contain" alignSelf="center" />
      </Card.Background>
    </Card>
  );
}
