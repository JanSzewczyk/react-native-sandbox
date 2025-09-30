import { View, Text } from "react-native";
import Animated, { SlideInDown, FadeIn } from "react-native-reanimated";

export default function JobsScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <View className="flex-1 items-center justify-center py-5">
        <Animated.View entering={SlideInDown.delay(100).springify()}>
          <Text className="mb-5 text-6xl">💼</Text>
        </Animated.View>
        <Animated.Text entering={FadeIn.delay(200)} className="mb-2.5 text-center text-2xl font-bold text-gray-900">
          Jobs
        </Animated.Text>
        <Animated.Text entering={FadeIn.delay(300)} className="text-center text-lg text-gray-700">
          Find your next opportunity
        </Animated.Text>
      </View>
    </View>
  );
}
