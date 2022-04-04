import React from "react";
import { Text, View, FlatList } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../components/Header";
import PremiumCard from "../components/PremiumCard";
import Data from "../Data/Artist";
import AlbumData from "../Data/Album";
import Artist from "../components/Artist";
import Album from "../components/Album";

const HomeScreen = () => {
  return (
    <View py="10" px="5">
      <Header />
      <PremiumCard />
      <View my={5}>
        <View
          display={"flex"}
          alignItems="center"
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Text fontSize={25} fontWeight="bold">
            Top Artist
          </Text>
          <MaterialIcons name="keyboard-arrow-right" size={25} color="black" />
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Data}
          renderItem={({ item }) => <Artist name={item.name} img={item.img} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <View my={5}>
        <View
          display={"flex"}
          alignItems="center"
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Text fontSize={25} fontWeight="bold">
            made for you
          </Text>
          <MaterialIcons name="keyboard-arrow-right" size={25} color="black" />
        </View>
        <FlatList
          my="4"
          horizontal
          showsHorizontalScrollIndicator={false}
          data={AlbumData}
          renderItem={({ item }) => <Album name={item.name} img={item.img} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
