import * as React from "react";
import { Text } from "react-native";
import Animated, { FadeInRight } from "react-native-reanimated";

type TechBadgeProps = {
  name: string;
  index: number;
  color?: "blue" | "green" | "purple" | "orange";
};

export function TechBadge({ name, index, color = "blue" }: TechBadgeProps) {
  const colorClasses = {
    blue: "bg-blue-100 border-blue-200 text-blue-700",
    green: "bg-green-100 border-green-200 text-green-700",
    purple: "bg-purple-100 border-purple-200 text-purple-700",
    orange: "bg-orange-100 border-orange-200 text-orange-700"
  };

  return (
    <Animated.View
      entering={FadeInRight.delay(1200 + index * 50).duration(400)}
      className={`rounded-full border px-4 py-2 ${colorClasses[color]} m-1`}
    >
      <Text className={`text-sm font-medium ${colorClasses[color].split(" ")[2]}`}>{name}</Text>
    </Animated.View>
  );
}
