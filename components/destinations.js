import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { destinationData } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

export default function Destinations() {
  const navigation = useNavigation();

  return (
    <View style={tw`mx-4 flex-row justify-between flex-wrap`}>
      {destinationData.map((item, index) => {
        return (
          <DestinationCard navigation={navigation} item={item} key={index} />
        );
      })}
    </View>
  );
}

const DestinationCard = ({ item, navigation }) => {
  const [isFavourite, toggleFavourite] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { ...item })}
      //   style={{ width: wp(44), height: wp(65) }}
      style={tw`flex justify-end relative p-4 py-6 space-y-2 mb-5 w-[40] h-[60]`}
    >
      <Image source={item.image} style={tw`absolute w-40 h-55 rounded-[8]`} />

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={tw`absolute bottom-0 w-[40] h-[50] rounded-[8]`}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />

      <TouchableOpacity
        onPress={() => toggleFavourite(!isFavourite)}
        // style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
        style={tw`absolute top-15 right-3 rounded-full p-3 bg-[rgba(255,255,255,0.4)]`}
      >
        <HeartIcon
          // style={{ width: "44px" }}
          size={20}
          color={isFavourite ? "red" : "white"}
        />
      </TouchableOpacity>

      <Text
        //   style={{ fontSize: wp(4) }}
        style={tw`text-white font-semibold`}
      >
        {item.title}
      </Text>
      <Text
        //   style={{ fontSize: wp(2.2) }}
        style={tw`text-white`}
      >
        {item.shortDescription}
      </Text>
    </TouchableOpacity>
  );
};
