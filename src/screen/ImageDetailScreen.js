import { ActivityIndicator, View, useWindowDimensions } from "react-native";
import { Typography } from "../components/Typography";
import { Header } from "../components/Header/Header";
import { useCallback, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RemoteImage } from "../components/RemoteImage";
import { CustomButton } from "../components/CustomButton";
import { Icon } from "../components/Icons";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

export default function ImageDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [downloading, setDownloading] = useState(false);
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const onPressDownload = useCallback(async () => {
    setDownloading(true);
    const downloadResumable = FileSystem.createDownloadResumable(route.params.url, `${FileSystem.documentDirectory}${new Date().getMilliseconds()}.jpg`);

    try {
      const { uri } = await downloadResumable.downloadAsync();

      const permissionResult = await MediaLibrary.getPermissionsAsync(true);
      if (permissionResult.status === "denied") {
        return;
      }
      if (permissionResult.status === "undetermined") {
        const requestResult = await MediaLibrary.requestPermissionsAsync();

        if (requestResult.status === "denied") {
          return;
        }
      }

      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.createAlbumAsync("MyAlbum", asset, false);
    } catch (error) {
      console.log(error);
    } finally {
      setDownloading(false);
    }
  }, []);

  const { width } = useWindowDimensions();

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon iconName={"arrow-back"} onPress={onPressBack} />
          <Header.Title title={"Image Detail"} />
        </Header.Group>
      </Header>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <RemoteImage url={route.params.url} width={width - 10} height={width * 1.2} />
      </View>
      <CustomButton onPress={onPressDownload}>
        <View style={{ paddingBottom: 24, backgroundColor: "black" }}>
          {downloading ? (
            <View style={{ height: 52, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <ActivityIndicator />
            </View>
          ) : (
            <View style={{ height: 52, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <Typography color={"white"}>Download</Typography>
              <Icon iconName={"download"} size={24} color={"white"} />
            </View>
          )}
        </View>
      </CustomButton>
    </View>
  );
}
