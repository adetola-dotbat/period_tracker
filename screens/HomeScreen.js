import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import assets from "../assets";

import MenuContainer from "../components/MenuContainer";
import ItemCarDontainer from "../components/ItemCarDontainer";
import { BMTData } from "../components";
import Categories from "../components/categories";
import Toptips from "../components/toptips";
import Destinations from "../components/destinations";
import SortCategories from "../components/sortCategories";
import ProductCategoryDetails from "../components/ProductCategoryDetails";

export default function HomeScreen() {
  const [type, setType] = useState("restaurants");
  const [bmtData, setBMTData] = useState(BMTData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setBMTData(BMTData);
    }

    const filteredData = BMTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      // console.log("yes sir yes sir");
      setBMTData(BMTData);
    } else {
      setBMTData(filteredData);
    }
  };
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={tw`flex-1 bg-[#FEE1D3]`}>
      <View style={tw`mx-5 flex-row justify-between items-center mb-10 pt-8`}>
        <Text style={tw`font-bold text-neutral-700 text-2xl`}>Welcome</Text>
        <TouchableOpacity>
          <Image source={assets.Avatar} style={tw`w-12 h-12 rounded-md`} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={tw`space-y-6`}>
        {/* toptips */}
        <View style={tw`mb-4`}>
          <Toptips />
        </View>
        <View style={tw`bg-white rounded-[10] py-8`}>
          {/* categories */}
          {/* <View style={tw`mb-4`}>
            <Categories />
          </View> */}

          {/* sort categories */}
          {/* <View className="mb-4">
            <SortCategories />
          </View> */}

          {/* post */}
          {/* <View style={tw`bg-white rounded-[10]`}>
            <Destinations />
          </View> */}
          <ProductCategoryDetails />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
