import React from "react";
import { Pressable } from "react-native";

export function CustomButton({ onPressIn, onPressOut, onPress, hitSlop, paddingV, paddingH, children }) {
  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      hitSlop={hitSlop ?? { left: 0, right: 0, top: 0, bottom: 0 }}
      style={{ paddingHorizontal: paddingH, paddingVertical: paddingV }}
    >
      {children}
    </Pressable>
  );
}
