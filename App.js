import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigations from "./src/navigations/BottomTabNavigations";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigations />
    </NavigationContainer>
  );
}
