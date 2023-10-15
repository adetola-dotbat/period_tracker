import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import FirstScreen from "./screens/FirstScreen";
import SecondScreen from "./screens/SecondScreen";
import ThirdScreen from "./screens/ThirdScreen";
import ForthScreen from "./screens/ForthScreen";
import FifthScreen from "./screens/FifthScreen";
import SixthScreen from "./screens/HomeScreen";
import HomeScreen from "./screens/HomeScreen";
import UnboardingScreen from "./screens/UnboardingScreen";
import Details from "./screens/Details";
import CalendarShow from "./screens/CalendarShow";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import tw from "twrnc";

import {
  HomeIcon as HomeOutline,
  HeartIcon as HeartOutline,
  ShoppingBagIcon as BagOutline,
} from "react-native-heroicons/outline";
import {
  HomeIcon as HomeSolid,
  HeartIcon as HeartSolid,
  ShoppingBagIcon as BagSolid,
} from "react-native-heroicons/solid";
import { View } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CalendarShow">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="s1" component={FirstScreen} />
        <Stack.Screen name="s2" component={SecondScreen} />
        <Stack.Screen name="s3" component={ThirdScreen} />
        <Stack.Screen name="s4" component={ForthScreen} />
        <Stack.Screen name="s5" component={FifthScreen} />
        <Stack.Screen name="s6" component={SixthScreen} />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Unboard" component={UnboardingScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen
          name="CalendarShow"
          options={{ headerShown: false }}
          component={CalendarShow}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 20,
          height: 75,
          alignItems: "center",
          borderRadius: 100,
          marginHorizontal: 20,
          backgroundColor: "blue",
        },
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="favourite" component={HomeScreen} />
      <Tab.Screen name="cart" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const menuIcons = (route, focused) => {
  let icon;

  if (route.name === "home") {
    icon = focused ? (
      <HeartSolid size="30" color="pink" />
    ) : (
      <HomeOutline size="30" strokeWidth={2} color="white" />
    );
  } else if (route.name === "favourite") {
    icon = focused ? (
      <HeartSolid size="30" color="red" />
    ) : (
      <HeartOutline size="30" strokeWidth={2} color="white" />
    );
  } else if (route.name === "cart") {
    icon = focused ? (
      <BagSolid size="30" color="red" />
    ) : (
      <BagOutline size="30" strokeWidth={2} color="white" />
    );
  }
  let buttonClass = focused ? "bg-white" : "";
  return (
    <View style={tw`flex items-center rounded-full p-3 shadow` + buttonClass}>
      {icon}
    </View>
  );
};
