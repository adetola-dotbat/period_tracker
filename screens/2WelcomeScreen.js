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
    <SafeAreaView
      style={tw`p-4 android:pt-2 flex-1 bg-[#3742FA] relative dark:bg-black`}
    >
      <View
        style={tw`w-[400px] h-[400px] bg-[#733ff9] rounded-full absolute bottom-36 -right-36`}
      ></View>
      <View
        style={tw`w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36`}
      ></View>
      <View style={tw`flex-1 items-center justify-center h-full mt-8`}>
        <Image
          source={assets.Student}
          style={tw`w-72 h-82 object-cover mt-20`}
        />
      </View>
      <View style={tw`flex bg-white rounded-3xl p-6`}>
        <Text style={tw`text-xl`}>Track your</Text>
        <Text style={tw`text-2xl text-[#3742FA] font-semibold`}>PERIOD</Text>
        <Text>
          The complete app to start tracking your period and knowing more about
          yourself
        </Text>
        <View style={tw`mt-8 flex-row justify-between items-center`}>
          <View style={tw`flex-row gap-4`}>
            <View
              style={tw`w-[3] h-[3] bg-[#white] rounded-full border-2 border-slate-200`}
            ></View>
            <View
              style={tw`w-[3] h-[3] bg-[#white] rounded-full border-2 border-slate-200`}
            ></View>
            <View style={tw`w-[3] h-[3] bg-[#3742FA] rounded-full`}></View>
          </View>

          <TouchableOpacity
            style={tw`bg-[#3742FA] p-8 rounded-full w-50 `}
            onPress={() => navigation.navigate("s1")}
          >
            <Text style={tw`text-white font-semibold text-xl text-center`}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
