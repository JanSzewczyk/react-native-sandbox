import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

type ActionButtonProps = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  variant?: "primary" | "secondary";
  onPress?: () => void;
};

export function ActionButton({ title, icon, variant = "primary", onPress }: ActionButtonProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  const isPrimary = variant === "primary";

  return (
    <AnimatedTouchableOpacity
      style={animatedStyle}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      className={`flex-row items-center justify-center gap-x-3 rounded-2xl p-4 shadow-sm ${
        isPrimary ? "bg-blue-500 shadow-blue-500/25" : "border-2 border-gray-200 bg-white"
      } `}
      activeOpacity={0.9}
    >
      <Ionicons name={icon} size={22} color={isPrimary ? "white" : "#374151"} />
      <Text className={`text-base font-semibold ${isPrimary ? "text-white" : "text-gray-700"} `}>{title}</Text>
    </AnimatedTouchableOpacity>
  );
}
