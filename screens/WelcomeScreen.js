// import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Image, SafeAreaView, TouchableOpacity } from "react-native";
import assets from "../assets";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={tw`flex-1 flex justify-end`}>
      <Image source={assets.Home} style={tw`w-full h-full absolute`} />

      <View style={tw`space-y-3 pb-8`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Unboard")}
          style={tw`mx-auto p-3 px-12 rounded-full bg-red bg-[#00365A]`}
        >
          <Text style={tw`text-white font-bold`}>Let's go!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
