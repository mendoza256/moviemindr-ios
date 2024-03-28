import type { CardProps } from "tamagui";

import { Button, Card, H5, Image, Paragraph, XStack } from "tamagui";

export function DemoCard(props: CardProps) {
  console.log(props.movie);
  const lightgrey = "#f5f5f5";
  const darkgrey = "#e0e0e0";
  return (
    <Card elevate size="$4" bordered {...props} borderRadius="$2">
      <Card.Header padded>
        <H5>{props.movie.title}</H5>

        <Paragraph theme="alt2">Showing at {props.movie.cinemaName}</Paragraph>
      </Card.Header>

      <Card.Footer padded>
        <XStack flex={1} />

        <Button borderRadius="$10">Save</Button>
      </Card.Footer>

      <Card.Background backgroundColor={darkgrey}>
        <Image resizeMode="contain" alignSelf="center" />
      </Card.Background>
    </Card>
  );
}
