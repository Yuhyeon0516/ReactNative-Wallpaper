import { useWindowDimensions } from "react-native";
import { CustomButton } from "./CustomButton";
import { RemoteImage } from "./RemoteImage";
import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

export default function PhotoListItem({ url }) {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const onPressItem = useCallback(() => {
    navigation.navigate("ImageDetail", { url: url.item });
  }, []);

  return (
    <CustomButton onPress={onPressItem} paddingH={20} paddingV={10}>
      <RemoteImage url={url.item} width={width - 40} height={width * 1.2} />
    </CustomButton>
  );
}
