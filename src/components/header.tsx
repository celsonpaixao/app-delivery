import React from "react";
import { View, Pressable, Text } from "react-native";
import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";

const Header = () => {
  return (
    <View className=" w-full p-2 flex-row  items-center justify-between">
      <Pressable className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
        <Ionicons name="menu" size={24} className="text-gray-600" />
      </Pressable>
      <View className="flex-col items-center gap-3">
        <Text className="text-center text-sm text-gray-600">Localização</Text>
        <View className="flex-row items-center justify-center gap-x-1">
          <Feather name="map-pin" size={14} color="#ff0000" />
          <Text className="text-lg font-semibold">Angola,Luanda</Text>
        </View>
      </View>

      <Pressable className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
        <Feather name="bell" size={24} className="text-gray-600" />
      </Pressable>
    </View>
  );
};

export default Header;
