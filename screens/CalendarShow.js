import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { CalendarContext } from "react-native-calendars";
import tw from "twrnc";
import { Calendar, LocaleConfig } from "react-native-calendars";

export default function CalendarShow() {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#FEE1D3]`}>
      <View style={tw`p-3 pt-10`}>
        <Text style={tw`text-center text-2xl py-3 font-semibold`}>
          My Calendar
        </Text>
        <Calendar
          style={tw`rounded-[10] p-3 outline-black`}
          onMonthChange={() => {}}
          initialDate="2022-09-10"
          minDate="2022-01-01"
          maxDate="2022-12-31"
          markingType="period"
          markedDates={{
            "2022-09-09": {
              startingDay: true,
              color: "#03dc03",
              selected: true,
              selectedColor: "blue",
            },
            "2022-09-10": {
              marked: true,
              color: "lightgreen",
              dotColor: "transparent",
            },
            "2022-09-11": {
              marked: true,
              color: "lightgreen",
              dotColor: "red",
            },
            "2022-09-12": {
              marked: true,
              color: "lightgreen",
              dotColor: "red",
            },
            "2022-09-13": {
              endingDay: true,
              color: "#03dc03",
              selectedTextColor: "white",
            },
            // ovulation period
            "2022-09-16": {
              startingDay: true,
              color: "#e45c01",
              selected: true,
              selectedColor: "blue",
            },
            "2022-09-17": {
              marked: true,
              color: "#f6e973",
              dotColor: "transparent",
            },
            "2022-09-18": {
              marked: true,
              color: "#f6e973",
              dotColor: "transparent",
            },
            "2022-09-19": {
              marked: true,
              color: "#f6e973",
              dotColor: "transparent",
            },
            "2022-09-20": {
              marked: true,
              color: "#f6e973",
              dotColor: "transparent",
            },
            "2022-09-21": {
              marked: true,
              color: "#f6e973",
              dotColor: "transparent",
            },
            "2022-09-22": {
              marked: true,
              color: "#f6e973",
              dotColor: "transparent",
            },
            "2022-09-23": {
              marked: true,
              color: "#f6e973",
              dotColor: "transparent",
            },
            "2022-09-24": {
              marked: true,
              color: "#f6e973",
              dotColor: "transparent",
            },
            "2022-09-25": {
              marked: true,
              color: "#f6e973",
              dotColor: "transparent",
            },
            "2022-09-26": {
              marked: true,
              color: "#f6e973",
              dotColor: "transparent",
            },
            "2022-09-27": {
              marked: true,
              color: "#f6e973",
              dotColor: "transparent",
            },
            "2022-09-28": {
              marked: true,
              color: "#f6e973",
              dotColor: "transparent",
            },
            "2022-09-29": {
              endingDay: true,
              color: "#e45c01",
              selectedTextColor: "white",
            },
          }}
        />
        <View
          style={tw`flex-row gap-4 bg-white py-10 px-5 my-4 rounded-[5] justify-between`}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <View
              style={tw`w-[3] h-[3] bg-[#03dc03] rounded-full border-2 border-slate-200`}
            ></View>
            <Text>Period Range</Text>
          </View>

          <View style={tw`flex-row items-center gap-2`}>
            <View
              style={tw`w-[3] h-[3] bg-[#e45c01] rounded-full border-2 border-slate-200`}
            ></View>
            <Text>Ovulation Range</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
