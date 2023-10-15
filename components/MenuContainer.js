import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const MenuContainer = ({ title, imageSrc, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };
  return (
    <TouchableOpacity
      style={tw`items-center justify-center space-y-2`}
      onPress={handlePress}
    >
      <View
        style={tw`w-20 h-20 p-2 rounded-full items-center justify-center ${
          type === title.toLowerCase() ? "bg-gray-200" : ""
        }`}
      >
        <Image source={imageSrc} style={tw`w-full h-full rounded-full`} />
      </View>
      <Text style={tw`text-[#4e56fb] text-xl font-semibold`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
