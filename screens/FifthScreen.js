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

export default function FifthScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={tw`p-4 android:pt-2  flex-1 bg-slate-200 relative`}>
      <View>
        <Text>Progressbar</Text>
      </View>
      <View style={tw`flex-4 pt-[5rem] flex-column gap-4 justify-center`}>
        <Text style={tw`text-2xl`}>Creating your personal program....</Text>
      </View>

      <View style={tw`flex-1 items-center`}>
        <TouchableOpacity
          style={tw`bg-[#3742FA] p-8 rounded-full w-[70]`}
          onPress={() => navigation.navigate("s6")}
        >
          <Text style={tw`text-white font-semibold text-xl text-center`}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
