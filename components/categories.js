import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import tw from "twrnc";

import { categoriesData } from "../constants";

export default function Categories() {
  return (
    <View style={tw`space-y-5`}>
      <View style={tw`mx-5 flex-row justify-between items-center pb-4`}>
        <Text style={tw`font-bold text-neutral-700 text-2xl	`}>Categories</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        style={tw`space-x-4`}
        showsHorizontalScrollIndicator={false}
      >
        {categoriesData.map((cat, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={tw`flex items-center space-y-2 px-2`}
            >
              <Image
                source={cat.image}
                style={tw`rounded-3xl w-20 h-19`}
                // style={{ width: wp(20), height: wp(19) }}
              />
              <Text
                style={tw`text-neutral-700 font-medium text-lg`}
                // style={{ fontSize: wp(3) }}
              >
                {cat.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
