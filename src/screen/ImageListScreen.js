import { FlatList, View } from "react-native";
import { Typography } from "../components/Typography";
import { Header } from "../components/Header/Header";
import { IMAGE_LIST } from "../constants";
import PhotoListItem from "../components/PhotoListItem";

export default function ImageListScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title="Image List" />
        </Header.Group>
      </Header>
      <FlatList
        style={{ flex: 1 }}
        data={IMAGE_LIST}
        renderItem={(item) => {
          return <PhotoListItem url={item} />;
        }}
      />
    </View>
  );
}
