import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import tw from "twrnc";

import { categoriesData, toptipsData } from "../constants";

export default function Toptips() {
  return (
    <View style={tw`space-y-5`}>
      <View style={tw`mx-5 flex-row justify-between items-center pb-4`}>
        <Text style={tw`font-bold text-neutral-700 text-2xl`}>Top tips</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        style={tw`space-x-4`}
        showsHorizontalScrollIndicator={false}
      >
        {toptipsData.map((cat, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={tw`flex items-center space-y-2 px-2`}
            >
              <View
                style={tw`p-1 rounded-3xl bg-[#ffffff] shadow-lg shadow-indigo-500/40 `}
              >
                <Image
                  source={cat.image}
                  style={tw`rounded-3xl w-44 h-44 border-red-500`}

                  // style={{ width: wp(20), height: wp(19) }}
                />
              </View>
              <Text
                style={tw`text-neutral-700 font-medium text-lg`}
                // style={{ fontSize: wp(3) }}
              >
                {cat.title?.length > 14
                  ? `${cat.title.slice(0, 19)}..`
                  : cat.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
