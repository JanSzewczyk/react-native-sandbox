import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from "react-native-reanimated";
import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";

const HEADER_EXPANDED = 36;
const HEADER_COLLAPSED = 120;

const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export default function TwitterScrollView() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll(event) {
      scrollY.value = event.contentOffset.y;
    }
  });

  const pillRefreshStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [-20, 0], [1, 0]);
    const rotate = interpolate(scrollY.value, [-45, -35], [180, 0], Extrapolation.CLAMP);
    return {
      opacity,
      transform: [{ rotate: `${rotate}deg` }]
    };
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [90, 100], [0, 1], Extrapolation.CLAMP);
    const translateY = interpolate(scrollY.value, [90, 110], [30, 0], Extrapolation.CLAMP);
    console.log(scrollY.value);
    return {
      opacity,
      transform: [{ translateY }]
    };
  });
  const profileImageAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(scrollY.value, [0, HEADER_EXPANDED], [0, 16], Extrapolation.CLAMP);
    const scale = interpolate(scrollY.value, [0, HEADER_EXPANDED], [1, 0.6], Extrapolation.CLAMP);
    return {
      transform: [{ translateY }, { scale }]
    };
  });
  const backgroundImageAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(scrollY.value, [-200, 0], [5, 1], Extrapolation.CLAMP);
    return {
      transform: [{ scale }]
    };
  });
  const animatedBlurViewAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [-50, 0, 50, 100], [1, 0, 0, 1], Extrapolation.CLAMP);
    return {
      opacity
    };
  });

  return (
    <View className="flex-1 bg-gray-950">
      <StatusBar style="auto" />
      <View className="flex-1">
        {/* Back Button */}
        <Animated.View className="absolute left-5 z-[999]" style={[{ top: insets.top }]}>
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute z-[2] size-11 items-center justify-center rounded-full bg-black/60"
          >
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
        </Animated.View>

        {/* Pull to refresh */}
        <Animated.View
          className="absolute left-0 right-0 z-[2] items-center"
          style={[{ top: insets.top + 12 }, pillRefreshStyle]}
        >
          <Ionicons name="chevron-down" size={24} color="#fff" />
        </Animated.View>

        {/* Sticky Header */}
        <Animated.View
          className="absolute left-0 right-0 z-[2] items-center"
          style={[{ top: insets.top + 6 }, headerAnimatedStyle]}
        >
          <Text className="text-xl font-bold text-gray-900">Jake</Text>
          <Text className="mt-2 text-sm text-gray-700">20 Posts</Text>
        </Animated.View>

        <AnimatedImageBackground
          source={{ uri: "https://picsum.photos/1000/1000" }}
          style={[
            {
              height: HEADER_COLLAPSED + HEADER_EXPANDED,
              position: "absolute",
              left: 0,
              right: 0,
              alignItems: "center",
              justifyContent: "center"
            },
            backgroundImageAnimatedStyle
          ]}
        >
          <AnimatedBlurView
            intensity={40}
            tint="dark"
            // className="absolute bottom-0 left-0 right-0 top-0"
            style={[
              { top: 0, bottom: 0, left: 0, right: 0, position: "absolute", height: "100%", width: "100%" },
              animatedBlurViewAnimatedStyle
            ]}
          />
        </AnimatedImageBackground>

        {/* Main Content */}
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={scrollHandler}
          contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
          className="z-[3]"
          style={{ marginTop: HEADER_COLLAPSED, paddingTop: HEADER_EXPANDED }}
        >
          <View className="bg-gray-950 px-4">
            <Animated.Image
              className="-mt-8 size-20 rounded-full border-4 border-gray-950"
              source={{ uri: "https://picsum.photos/200/200" }}
              style={profileImageAnimatedStyle}
            />
            <Text className="mt-2 text-xl font-bold text-white">Jan Szewczyk</Text>
            <Text className="mt-0.5 text-gray-500">@dzikiszumrak</Text>
            <Text className="mt-2 text-gray-400">Developer. Gardener.</Text>

            <View className="my-4 flex-row">
              <Text className="mr-5 font-bold text-white">
                150 {<Text className="font-normal text-gray-500">Following</Text>}
              </Text>
              <Text className="mr-5 font-bold text-white">
                1.4k {<Text className="font-normal text-gray-500">Followers</Text>}
              </Text>
            </View>
          </View>
          <View className="bg-gray-950">
            {Array.from({ length: 100 }).map((_, index) => (
              <View key={index} className="m-4 rounded bg-white p-4 shadow-sm">
                <Text className="mb-2 text-xl font-semibold text-gray-900">Item {index + 1}</Text>
                <Text className="text-sm text-gray-600">
                  This is some sample to demonstrate the scrolling behavior. Scroll down to hide the header, scroll up
                  to show it again.
                </Text>
              </View>
            ))}
          </View>
        </Animated.ScrollView>
      </View>
    </View>
  );
}
