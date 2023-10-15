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
    <SafeAreaView style={tw`flex bg-white relative`}>
      <View
        style={tw`flex-row items-center bg-[#3742FA] justify-between px-8 py-8`}
      >
        <View>
          <Text style={tw`text-[40px] text-white font-bold`}>Welcome</Text>
          <Text style={tw`text-white text-[36px]`}>Chika Toyosi</Text>
        </View>

        <View
          style={tw`w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg`}
        >
          <Image
            source={assets.Avatar}
            style={tw`w-full h-full rounded-md object-cover`}
          />
        </View>
      </View>

      <ScrollView>
        <View style={tw`flex-row items-center justify-between px-8 mt-8`}>
          <MenuContainer
            key={"pyschology"}
            title="Pyschology"
            imageSrc={assets.psychology}
            type={type}
            setType={setType}
          />

          <MenuContainer
            key={"health"}
            title="Health"
            imageSrc={assets.health}
            type={type}
            setType={setType}
          />

          <MenuContainer
            key={"hygiene"}
            title="Hygiene"
            imageSrc={assets.hygiene}
            type={type}
            setType={setType}
          />
        </View>
        <View>
          <View style={tw`flex-row items-center justify-between px-4 mt-8`}>
            <Text style={tw`text-[#3742FA] text-[28px] font-bold`}>
              Top Tips
            </Text>
            <TouchableOpacity
              style={tw`flex-row items-center justify-center space-x-2`}
            >
              {/* <Text style={tw`text-[#888df8] text-[20px] font-bold`}>
              Explore
            </Text> */}
            </TouchableOpacity>
          </View>
          <View
            style={tw`flex-1 px-4 mt-8 flex-row items-center justify-evenly flex-wrap`}
          >
            <FlatList
              data={bmtData}
              renderItem={({ item }) => (
                <View
                  style={tw`px-4 mt-8 flex-row items-center justify-evenly flex-wrap`}
                >
                  <ItemCarDontainer imageSrc={item.image} title={item.title} />
                </View>
              )}
              keyExtractor={(item) => item.id}
              horizontal={false}
              numColumns={2}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
