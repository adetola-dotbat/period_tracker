import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

const ItemCarDontainer = ({ title, imageSrc }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ItemScreen")}
      style={tw`rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[130px] my-2`}
    >
      <Image
        source={imageSrc}
        style={tw`w-full h-30 rounded-md object-cover`}
      />
      <Text className="text-[#428288] text-[18px] font-bold">
        {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
        {/* sure */}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemCarDontainer;
