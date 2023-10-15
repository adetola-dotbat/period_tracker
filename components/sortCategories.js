import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { sortCategoryData } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../theme";
import tw from "twrnc";

export default function SortCategories() {
  const [activeSort, setActiveSort] = useState("Popular");
  return (
    <View
      style={tw`flex-row justify-around items-center mx-4 bg-neutral-100 rounded-full p-2 px-4 space-x-2`}
    >
      {sortCategoryData.map((sort, index) => {
        let isActive = sort == activeSort;
        let activeButtonClass = isActive ? "bg-white shadow" : "";
        return (
          <TouchableOpacity
            onPress={() => setActiveSort(sort)}
            key={index}
            style={tw`p-3 px-4 rounded-full flex ${activeButtonClass}`}
          >
            <Text
              style={{
                fontSize: 14,
                color: isActive ? theme.text : "rgba(0,0,0,0.6)",
              }}
            >
              {sort}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
