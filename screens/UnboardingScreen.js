// import React from "react";
import { View, Text, StyleSheet } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Image, SafeAreaView, TouchableOpacity } from "react-native";
import assets from "../assets";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";

export default function UnboardingScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const handleDone = () => {
    navigation.navigate("Home");
    // setItem("onboarded", "1");
  };

  //   const doneButton = ({ ...props }) => {
  //     return (
  //       <TouchableOpacity style={styles.doneButton} {...props}>
  //         <Text>Done</Text>
  //       </TouchableOpacity>
  //     );
  //   };

  return (
    <View style={styles.container}>
      <Image source={assets.Unboard} style={tw`w-full h-full absolute`} />
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        style={tw`text-black`}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            // backgroundColor: "#582d2d",
            // image: (
            //   <View>
            //     <Image
            //       source={assets.animone}
            //       style={tw`w-72 h-72 rounded-full`}
            //     />
            //   </View>
            // ),
            title: (
              <View>
                <Text style={tw`text-2xl text-semibold text-orange-400`}>
                  Grow your Mind
                </Text>
              </View>
            ),
            subtitle: (
              <View style={tw`text-center p-4`}>
                <Text style={tw`text-center`}>
                  BloomMinds helps you to grow in knowledge of your body by
                  giving you daily body tips
                </Text>
              </View>
            ),
          },
          {
            // backgroundColor: "#deb307",

            title: (
              <View>
                <Text style={tw`text-2xl text-semibold text-orange-400`}>
                  Track your period
                </Text>
              </View>
            ),
            subtitle: (
              <View style={tw`text-center p-4`}>
                <Text style={tw`text-center`}>
                  By creating an account with us, you can track your period with
                  our amazing app
                </Text>
              </View>
            ),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    color: "black",
  },

  lottie: {
    width: 300,
    height: 400,
  },
});
