import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import assets from "../assets";

export default function SeventhScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={tw`p-4 android:pt-2  flex-1 bg-slate-200 relative`}>
      <View style={tw`items-center`}>
        <Image source={assets.Avatar} style={tw`w-64 h-64 rounded-full`} />
      </View>
      <View
        style={tw`flex-2 pt-[5rem] flex-column gap-4 justify-center items-center`}
      >
        <Text style={tw`text-2xl text-center`}>
          Understand yourself better than ever
        </Text>
        <Text style={tw`text-center`}>
          Enjoy thousands of expert articles on your personal feed, which is
          continuously being adapted to your changing lifestyle.
        </Text>
      </View>
      <View style={tw`flex-1 items-center`}>
        <TouchableOpacity
          style={tw`bg-[#3742FA] p-8 rounded-full w-[70]`}
          onPress={() => navigation.navigate("s7")}
        >
          <Text style={tw`text-white font-semibold text-xl text-center`}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
