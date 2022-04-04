import React from "react";
import { View, Text, Image } from "native-base";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

type Props = {
  img: string;
  name: string;
};

const Album = ({ img, name }: Props) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("music")}>
      <View maxW="20" mr="6">
        <Image
          w="16"
          h="16"
          borderRadius={"lg"}
          source={{
            uri: img,
          }}
        />
        <Text mt="2" fontSize={12} fontWeight="bold">
          {name}
        </Text>
      </View>
    </Pressable>
  );
};

export default Album;
