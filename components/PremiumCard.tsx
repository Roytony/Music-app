import React from "react";
import { View, Text, Button } from "native-base";
import { Foundation } from "@expo/vector-icons";

const PremiumCard = () => {
  return (
    <View
      w="100%"
      h="40"
      display={"flex"}
      flexDirection="row"
      borderRadius={"2xl"}
      my="5"
      bg="#1A1925"
      px="8"
      py="4"
    >
      <View w="70%">
        <View>
          <Text fontSize={16} fontWeight="bold" color="white">
            Go Premium ,
          </Text>
          <Text fontSize={16} fontWeight="bold" color="white">
            Be Happy
          </Text>
        </View>

        <Button w="60%" bg="white" color={"gray.900"} my="4">
          <Text fontWeight={"bold"}>Start Free Trial</Text>
        </Button>
      </View>
      <Foundation name="music" size={60} color="gray" />
    </View>
  );
};

export default PremiumCard;
