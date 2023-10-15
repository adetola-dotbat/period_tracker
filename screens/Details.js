import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import {
  ClockIcon,
  HeartIcon,
  MapPinIcon,
  SunIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../theme";
import tw from "twrnc";

const ios = Platform.OS == "ios";
const topMargin = ios ? "" : "mt-10";

export default function Details(props) {
  const item = props.route.params;
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);
  // console.log(item);

  return (
    <View style={tw`bg-white flex-1`}>
      {/* destination image */}
      <Image source={{ uri: item.image }} style={tw`w-full h-65`} />
      <StatusBar style={"light"} />

      {/* back button */}
      <SafeAreaView
        style={tw`flex-row justify-between items-center w-full absolute`}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          //   className="p-2 rounded-full ml-4"
          style={tw`p-2 rounded-full ml-4 bg-[rgba(255,255,255,0.5)]`}
        >
          <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleFavourite(!isFavourite)}
          //   className="p-2 rounded-full mr-4"
          style={tw`p-2 rounded-full ml-4 bg-[rgba(255,255,255,0.5)]`}
        >
          <HeartIcon
            size={wp(7)}
            strokeWidth={3}
            color={isFavourite ? "red" : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>
      {/* title & descritpion & booking button */}
      <View
        style={[
          tw`px-5 flex flex-1 justify-between bg-white pt-8 -mt-14`,
          { borderTopLeftRadius: 40, borderTopRightRadius: 40 },
        ]}
        // className=""
      >
        <ScrollView showsVerticalScrollIndicator={false} style={tw`space-y-5`}>
          <View style={tw`flex-row justify-between items-start`}>
            <Text
              //   style={{ fontSize: wp(7) }}
              style={[
                tw`font-bold flex-1 text-neutral-700 `,
                { fontSize: wp(7) },
              ]}
            >
              {item?.name}
            </Text>
          </View>
          <Text
            // style={{ fontSize: wp(3.7) }}
            style={[tw`text-neutral-700 mb-2 leading-7`, { fontSize: wp(3.7) }]}
          >
            {item?.description}
          </Text>
        </ScrollView>
        {/* <TouchableOpacity
     style={{
       backgroundColor: theme.bg(0.8),
       height: wp(15),
       width: wp(50),
     }}
     className="mb-6 mx-auto flex justify-center items-center rounded-full"
   >
     <Text className="text-white font-bold" style={{ fontSize: wp(5.5) }}>
       Book now
     </Text>
   </TouchableOpacity> */}
      </View>
    </View>
  );
}
