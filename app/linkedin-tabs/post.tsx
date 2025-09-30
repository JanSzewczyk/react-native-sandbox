import { View, Text } from "react-native";
import Animated, {
  FadeInUp,
  FadeInDown,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming
} from "react-native-reanimated";
import { useEffect } from "react";

export default function PostScreen() {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(withTiming(360, { duration: 2000 }), -1, false);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }]
  }));

  return (
    <View className="flex-1 bg-gray-50">
      <View className="flex-1 items-center justify-center py-5">
        <Animated.View entering={FadeInUp.springify()} style={animatedStyle}>
          <Text className="mb-5 text-6xl">✍️</Text>
        </Animated.View>
        <Animated.Text
          entering={FadeInDown.delay(200).springify()}
          className="mb-2.5 text-center text-2xl font-bold text-gray-900"
        >
          Create Post
        </Animated.Text>
        <Animated.Text entering={FadeInDown.delay(300).springify()} className="text-center text-lg text-gray-700">
          Share your professional insights
        </Animated.Text>
      </View>
    </View>
  );
}
