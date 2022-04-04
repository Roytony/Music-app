import React from "react";
import { View, Text, Image } from "native-base";

type Props = {
  img: string;
  name: string;
};

const Artist = ({ img, name }: Props) => {
  return (
    <View mr="4">
      <Image w="20" h="20" borderRadius={"full"} source={{ uri: img }} />
      <Text fontWeight={"bold"} fontSize={12}>
        {name}
      </Text>
    </View>
  );
};

export default Artist;
