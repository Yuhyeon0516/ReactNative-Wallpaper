import { Animated, useWindowDimensions } from "react-native";
import { CustomButton } from "./CustomButton";
import { RemoteImage } from "./RemoteImage";
import { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function PhotoListItem({ url }) {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const [animValue, setAnimValue] = useState(new Animated.Value(0));

  const onPressItem = useCallback(() => {
    navigation.navigate("ImageDetail", { url: url.item });
  }, []);

  const onPressIn = useCallback(() => {
    Animated.timing(animValue, {
      duration: 200,
      toValue: 1,
      useNativeDriver: false,
    }).start();
  }, []);

  const onPressOut = useCallback(() => {
    Animated.timing(animValue, {
      duration: 200,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  }, []);

  const scale = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1.0, 0.95],
  });

  return (
    <CustomButton onPressIn={onPressIn} onPressOut={onPressOut} onPress={onPressItem} paddingH={20} paddingV={10}>
      <Animated.View
        style={{
          transform: [{ scale: scale }],
        }}
      >
        <RemoteImage url={url.item} width={width - 40} height={width * 1.2} />
      </Animated.View>
    </CustomButton>
  );
}
