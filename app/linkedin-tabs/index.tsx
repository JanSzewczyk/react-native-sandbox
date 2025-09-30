import { View, Text, ScrollView } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50" contentContainerClassName="p-4">
      <Animated.View entering={FadeInUp.delay(100).springify()}>
        <View className="elevation mb-4 rounded-2xl bg-white p-5 shadow-sm">
          <Text className="mb-2 text-2xl font-bold text-gray-900">Welcome back!</Text>
          <Text className="text-md text-gray-500">Here's what's happening in your network</Text>
        </View>
      </Animated.View>

      <Animated.View entering={FadeInUp.delay(200).springify()}>
        <View className="elevation mb-4 rounded-2xl bg-white p-5 shadow-sm">
          <Text className="mb-2 text-lg font-bold text-blue-500">🚀 Latest Updates</Text>
          <Text className="text-gray-500">
            Stay connected with your professional network and discover new opportunities.
          </Text>
        </View>
      </Animated.View>

      <Animated.View entering={FadeInUp.delay(300).springify()}>
        <View className="elevation mb-4 rounded-2xl bg-white p-5 shadow-sm">
          <Text className="mb-2 text-lg font-bold text-blue-500">💼 Career Insights</Text>
          <Text className="text-gray-500">
            Get personalized job recommendations and industry insights tailored to your profile.
          </Text>
        </View>
      </Animated.View>
    </ScrollView>
  );
}
