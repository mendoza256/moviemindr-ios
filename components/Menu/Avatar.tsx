import React from "react";

import { Avatar, XStack } from "tamagui";
export function UserAvatar() {
  return (
    <XStack alignItems="center" space="$6">
      <Avatar circular size="$2">
        <Avatar.Image
          accessibilityLabel="Cam"
          //   src={require("../../assets/user.svg")}
          src={require("../../assets/user.png")}
        />

        <Avatar.Fallback backgroundColor="$blue10" />
      </Avatar>
      {/* <Avatar circular size="$8">
        <Avatar.Image
          accessibilityLabel="Nate Wienert"
          src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
        />

        <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
      </Avatar> */}
    </XStack>
  );
}
