import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { CalendarContext } from "react-native-calendars";
import tw from "twrnc";
import { Calendar, LocaleConfig } from "react-native-calendars";

export default function CalendarShow() {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#FEE1D3]`}>
      <View style={tw`p-3 pt-10`}>
        <Calendar
          style={tw`rounded-[10] p-3`}
          onMonthChange={() => {}}
          initialDate="2022-09-10"
          minDate="2022-01-01"
          maxDate="2022-12-31"
          markingType="period"
          markedDates={{
            "2022-09-09": {
              startingDay: true,
              color: "green",
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
              marked: true,
              color: "lightgreen",
              dotColor: "red",
            },
            "2022-09-14": { endingDay: true, color: "green" },
          }}
        />
      </View>
    </SafeAreaView>
  );
}
