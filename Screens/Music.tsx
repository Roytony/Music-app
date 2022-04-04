import React from "react";
import { View, Text, Image } from "native-base";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import Player from "../components/Player";

const Music = ({ navigation }) => {
  return (
    <View px="5" py="10">
      <View
        display={"flex"}
        alignItems="center"
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <MaterialIcons
          onPress={() => navigation.goBack()}
          size={25}
          name="keyboard-arrow-left"
        />
        <Text fontSize={20} fontWeight="bold">
          Now Playing
        </Text>
        <Entypo name="dots-three-vertical" size={25} color="black" />
      </View>
      <Image
        w="80%"
        h="400"
        borderRadius={"xl"}
        mx="auto"
        my="6"
        source={{
          uri: "https://images.pexels.com/photos/10508876/pexels-photo-10508876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }}
      />
      <View display={"flex"} alignItems="center">
        <Text fontSize={24} fontWeight="bold">
          Lofi Remix
        </Text>
        <Text fontSize={24} fontWeight="bold">
          Netali Refeitt
        </Text>
      </View>
      <Player />
    </View>
  );
};

export default Music;
