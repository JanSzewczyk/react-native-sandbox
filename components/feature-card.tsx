import * as React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Link } from "expo-router";

type FeatureCardProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  index: number;
  href: React.ComponentProps<typeof Link>["href"];
};

export function FeatureCard({ icon, title, description, index, href }: FeatureCardProps) {
  return (
    <Animated.View
      entering={FadeInDown.delay(600 + index * 100).duration(600)}
      className="mb-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
    >
      <Link href={href}>
        <View className="flex-row items-start gap-x-4">
          <View className="h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
            <Ionicons name={icon} size={24} color="#3B82F6" />
          </View>
          <View className="flex-1">
            <Text className="mb-2 text-lg font-semibold text-gray-900">{title}</Text>
            <Text className="text-sm leading-6 text-gray-600">{description}</Text>
          </View>
        </View>
      </Link>
    </Animated.View>
  );
}
