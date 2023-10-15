import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function SecondScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const [number, onChangeNumber] = React.useState("");

  return (
    <SafeAreaView style={tw`p-4 android:pt-2  flex-1 bg-slate-200 relative`}>
      <View style={tw`flex-4 pt-[5rem] flex-column gap-4 justify-center`}>
        <Text style={tw`text-2xl`}>How old are you?</Text>
        <Text>
          We’ll ask you a few questions to help personalize your experience.
          Don’t worry, it’ll only take a few minutes
        </Text>
        <TextInput
          style={tw`border-b-2 border-blue-600 p-2 text-xl rounded bg-slate-300`}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Age"
          keyboardType="numeric"
          maxLength={2}
        />
      </View>

      <View style={tw`flex-1 items-center`}>
        <TouchableOpacity
          style={tw`bg-[#3742FA] p-8 rounded-full w-[70]`}
          onPress={() => navigation.navigate("s3")}
        >
          <Text style={tw`text-white font-semibold text-xl text-center`}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
