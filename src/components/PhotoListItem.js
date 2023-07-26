import { useWindowDimensions } from "react-native";
import { CustomButton } from "./CustomButton";
import { RemoteImage } from "./RemoteImage";
import { useCallback } from "react";

export default function PhotoListItem({ url }) {
  const { width } = useWindowDimensions();

  const onPressItem = useCallback(() => {});

  return (
    <CustomButton onPress={onPressItem} paddingH={20} paddingV={10}>
      <RemoteImage url={url.item} width={width - 40} height={width * 1.2} />
    </CustomButton>
  );
}
