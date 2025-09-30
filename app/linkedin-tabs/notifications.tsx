import { View, Text } from "react-native";
import Animated, { FadeInRight, ZoomIn } from "react-native-reanimated";

export default function NotificationsScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <View className="flex-1 items-center justify-center py-5">
        <Animated.View entering={ZoomIn.delay(100).springify()}>
          <Text className="mb-5 text-6xl">🔔</Text>
        </Animated.View>
        <Animated.Text
          entering={FadeInRight.delay(200)}
          className="mb-2.5 text-center text-2xl font-bold text-gray-900"
        >
          Notifications
        </Animated.Text>
        <Animated.Text entering={FadeInRight.delay(300)} className="text-center text-lg text-gray-700">
          Stay updated with your network
        </Animated.Text>
      </View>
    </View>
  );
}
