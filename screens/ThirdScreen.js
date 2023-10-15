import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
// import DatePicker from "react-native-datepicker";

export default function ThirdScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={tw`p-4 android:pt-2  flex-1 bg-slate-200 relative`}>
      <View style={tw`flex-4 pt-[5rem] flex-column gap-4 justify-center`}>
        <Text style={tw`text-2xl`}>What is your menstrual status?</Text>
        <TouchableOpacity
          style={tw`bg-[#3742FA] p-4 px-6 rounded-full w-full`}
          onPress={() => navigation.navigate("s3")}
        >
          <Text style={tw`text-white font-semibold`}>
            Painful menstrual cramps
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-[#3742FA] p-4 px-6 rounded-full w-full`}
          onPress={() => navigation.navigate("s3")}
        >
          <Text style={tw`text-white font-semibold`}>
            My cycle is irregular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-[#3742FA] p-4 px-6 rounded-full w-full`}
          onPress={() => navigation.navigate("s3")}
        >
          <Text style={tw`text-white font-semibold`}>I don’t know</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`flex-1 items-center`}>
        <TouchableOpacity
          style={tw`bg-[#3742FA] p-8 rounded-full w-[70]`}
          onPress={() => navigation.navigate("s4")}
        >
          <Text style={tw`text-white font-semibold text-xl text-center`}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
