import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import { Header } from "../components/Header/Header";
import PhotoListItem from "../components/PhotoListItem";

export default function FavoriteImageListScreen() {
  const imageList = useSelector((state) => state.favorite.favoriteList);
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="Favorite" />
      </Header>

      <FlatList
        style={{ flex: 1 }}
        data={imageList}
        renderItem={(item) => {
          return <PhotoListItem url={item} />;
        }}
      />
    </View>
  );
}
