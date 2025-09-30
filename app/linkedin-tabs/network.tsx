import { View, Text } from "react-native";
import Animated, { FadeInLeft, BounceIn } from "react-native-reanimated";

export default function NetworkScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <Animated.View entering={BounceIn.delay(100)} className="flex-1 items-center justify-center py-5">
        <Text className="mb-5 text-6xl">👥</Text>
        <Animated.Text entering={FadeInLeft.delay(200)} className="mb-2.5 text-center text-2xl font-bold text-gray-900">
          My Network
        </Animated.Text>
        <Animated.Text entering={FadeInLeft.delay(300)} className="text-center text-lg text-gray-700">
          Grow your professional network
        </Animated.Text>
      </Animated.View>
    </View>
  );
}
