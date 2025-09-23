import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import { Text, View } from "react-native";

const HEADER_HEIGHT = 80;

export default function AnimatedHeaderView() {
  const { top: statusBarHeight, bottom } = useSafeAreaInsets();

  const scrollY = useSharedValue(0);
  const lastScrollY = useSharedValue(0);
  const headerTranslateY = useSharedValue(0);
  const isScrollingDown = useSharedValue(false);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll(event) {
      const currentScrollY = event.contentOffset.y;
      const diff = currentScrollY - lastScrollY.value;

      if (Math.abs(diff) > 10) {
        if (currentScrollY > lastScrollY.value && currentScrollY > HEADER_HEIGHT) {
          // scroll down - hide
          if (!isScrollingDown.value) {
            isScrollingDown.value = true;
            headerTranslateY.value = withTiming(-HEADER_HEIGHT, { duration: 500 });
          }
        } else if (currentScrollY < lastScrollY.value) {
          // scroll up - show
          if (isScrollingDown.value) {
            isScrollingDown.value = false;
            headerTranslateY.value = withTiming(0, { duration: 500 });
          }
        }

        // Show header when at the top
        if (currentScrollY <= 0) {
          isScrollingDown.value = false;
          headerTranslateY.value = withTiming(0, { duration: 500 });
        }

        lastScrollY.value = currentScrollY;
      }

      scrollY.value = currentScrollY;
    }
  });

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: headerTranslateY.value }]
  }));
  const headerShadowStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 100], [0, 1], Extrapolation.CLAMP);
    return {
      shadowOpacity: opacity
    };
  });

  const headerContentStyle = useAnimatedStyle(() => {
    const opacity = interpolate(headerTranslateY.value, [-80, 0], [0, 1], Extrapolation.CLAMP);
    return {
      opacity
    };
  });

  return (
    <SafeAreaView>
      <StatusBar style="dark" translucent />

      {/* Animated Header */}
      <Animated.View
        style={[
          headerAnimatedStyle,
          headerShadowStyle,
          { height: HEADER_HEIGHT + statusBarHeight, paddingTop: statusBarHeight }
        ]}
        className="absolute left-0 right-0 top-0 z-[1000] border-b border-gray-100 bg-white shadow"
      >
        <Animated.View style={[headerContentStyle]} className="flex-1 items-center justify-center">
          <Text className="text-2xl text-gray-900">Header</Text>
          <Text className="text-gray-600">Hide on scroll down - Show on scroll up</Text>
        </Animated.View>
      </Animated.View>

      {/* Scrollable Content */}
      <Animated.ScrollView
        onScroll={scrollHandler}
        contentContainerClassName="pt-24 pb-6"
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        {Array.from({ length: 100 }).map((_, index) => (
          <View key={index} className="m-4 rounded bg-white p-4 shadow-sm">
            <Text className="mb-2 text-xl font-semibold text-gray-900">Item {index + 1}</Text>
            <Text className="text-sm text-gray-600">
              This is some sample to demonstrate the scrolling behavior. Scroll down to hide the header, scroll up to
              show it again.
            </Text>
          </View>
        ))}
      </Animated.ScrollView>
    </SafeAreaView>
  );
}
