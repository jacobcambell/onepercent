import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import Checkin from "./pages/Checkin";
import Statusbar from "./components/Statusbar";

export default function App() {
  return (
    <NavigationContainer theme={{ colors: { background: "#fff" } }}>
      <Statusbar backgroundColor={"#000"}></Statusbar>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Checkin" component={Checkin} />
        <Tab.Screen name="Other" component={Checkin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
