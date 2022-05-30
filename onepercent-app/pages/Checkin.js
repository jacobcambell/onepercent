import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import dayjs from "dayjs";

const today = dayjs(new Date()).format("MMMM D, YYYY");

export default function Checkin() {
  const [fontLoaded] = useFonts({
    Lato: require("../assets/fonts/Lato-Regular.ttf"),
    LatoBold: require("../assets/fonts/Lato-Bold.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <View style={{ padding: 10 }}>
        <Text style={HeaderStyle}>Check In {today}</Text>
        <Text style={{ fontFamily: "Lato", fontSize: 18, paddingBottom: 10 }}>
          How did you improve today?
        </Text>
        <TextInput
          style={{
            borderColor: "#ccc",
            borderWidth: 1,
            height: 160,
            padding: 5,
            marginBottom: 16,
          }}
          multiline={true}
        ></TextInput>
        <TouchableOpacity style={CheckInBtn}>
          <Text
            style={{ color: "white", fontFamily: "LatoBold", fontSize: 18 }}
          >
            Check In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const HeaderStyle = StyleSheet.create({
  fontFamily: "LatoBold",
  fontSize: 22,
  paddingBottom: 10,
});

const CheckInBtn = StyleSheet.create({
  fontFamily: "LatoBold",
  backgroundColor: "#003566",
  justifyContent: "center",
  alignItems: "center",
  padding: 16,
});
