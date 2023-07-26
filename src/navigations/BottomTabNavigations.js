import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ImageListScreen from "../screen/ImageListScreen";
import FavoriteImageListScreen from "../screen/FavoriteImageListScreen";

const Tabs = createBottomTabNavigator();

export default function BottomTabNavigations() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="ImageList" component={ImageListScreen} />
      <Tabs.Screen name="FavoriteImageList" component={FavoriteImageListScreen} />
    </Tabs.Navigator>
  );
}
