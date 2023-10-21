import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";

export default function FirstScreen() {
  const navigation = useNavigation();

  // const register = () => {
  //   navigation.navigate("s2", {
  //     name: name,
  //   });
  // };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");
  const [name, setName] = useState("");
  return (
    <SafeAreaView style={tw`p-4 android:pt-2  flex-1 bg-slate-200 relative`}>
      <View style={tw`flex-4 pt-[5rem] flex gap-4 justify-center`}>
        <Text>Let’s get to know you. </Text>
        <Text style={tw`text-2xl`}>What is your name?</Text>
        <Text>
          Tell us name, a nickname or skip this step - its totally up to you
        </Text>
        <TextInput
          style={tw`border-b-2 border-blue-600 p-2 text-xl rounded bg-slate-300`}
          onChangeText={(text) => setName(text)}
          placeholder="Name"
          keyboardType="text"
          value={name}
        />
      </View>
      <View style={tw`flex-1 items-center`}>
        <TouchableOpacity
          style={tw`bg-[#3742FA] p-8 rounded-full w-[70]`}
          onPress={() =>
            navigation.navigate("Home", {
              name: name,
            })
          }
        >
          <Text style={tw`text-white font-semibold text-xl text-center`}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
