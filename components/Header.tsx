import React from "react";
import { View, Text, Image } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const Header: React.FC = () => {
  return (
    <View
      display={"flex"}
      flexDirection="row"
      alignItems={"center"}
      justifyContent="space-between"
    >
      <View display={"flex"} alignItems="center" flexDirection="row">
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=52" }}
          w="10"
          h="10"
          borderRadius={"full"}
        />
        <View ml="5" display={"flex"} alignItems="flex-start">
          <Text>Good morning</Text>
          <Text fontSize={18} fontWeight="bold">
            Arindam Roy
          </Text>
        </View>
      </View>

      <Ionicons name="notifications" size={25} color="black" />
    </View>
  );
};

export default Header;
