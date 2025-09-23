import { Text, ScrollView, View, Linking } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { FeatureCard } from "~/components/feature-card";
import { TechBadge } from "~/components/tech-badge";
import { ActionButton } from "~/components/action-button";
import { BlurView } from "expo-blur";

const features = [
  {
    icon: "code-slash-outline",
    title: "Cross-Platform",
    description: "Built with React Native & Expo for iOS and Android",
    href: "/animated-header"
  }
] as const;

const techStack = [
  { name: "React Native 0.81", color: "blue" },
  { name: "Expo SDK 54", color: "purple" },
  { name: "TypeScript 5.9", color: "blue" },
  { name: "Expo Router v6", color: "green" },
  { name: "NativeWind", color: "orange" },
  { name: "Reanimated 4", color: "purple" },
  { name: "React 19", color: "blue" },
  { name: "Zod Validation", color: "green" }
] as const;

export default function Index() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <BlurView
        intensity={40}
        tint="light"
        className="absolute left-0 right-0 top-0 z-[999]"
        style={{
          height: insets.top || 44
        }}
      />

      <ScrollView className="flex-1 bg-white" showsVerticalScrollIndicator={false} contentContainerClassName="pb-10">
        <SafeAreaView className="flex-1">
          {/* Hero Section */}
          <Animated.View entering={FadeInUp.delay(200).duration(800)} className="px-6 pb-6 pt-8">
            <View className="items-center">
              <Animated.View
                entering={FadeInUp.delay(400).duration(600)}
                className="mb-6 size-24 items-center justify-center rounded-3xl shadow-lg"
              >
                <Ionicons name="rocket" size={48} color="white" />
              </Animated.View>

              <Animated.Text
                entering={FadeInUp.delay(600).duration(600)}
                className="mb-3 text-center text-4xl font-bold text-gray-900"
              >
                React Native
              </Animated.Text>
              <Animated.Text
                entering={FadeInUp.delay(700).duration(600)}
                className="mb-4 text-center text-4xl font-bold text-blue-500"
              >
                Sandxbox
              </Animated.Text>

              <Animated.Text
                entering={FadeInUp.delay(800).duration(600)}
                className="max-w-sm px-4 text-center text-lg leading-7 text-gray-600"
              >
                A modern, production-ready starter template with TypeScript, Expo, and industry best practices
              </Animated.Text>
            </View>
          </Animated.View>

          {/* Features Section */}
          <View className="mt-8 px-6">
            <Animated.Text
              entering={FadeInDown.delay(1000).duration(600)}
              className="mb-2 text-2xl font-bold text-gray-900"
            >
              ✨ Features
            </Animated.Text>
            <Animated.Text entering={FadeInDown.delay(1100).duration(600)} className="mb-6 leading-6 text-gray-600">
              Everything you need to build professional mobile applications
            </Animated.Text>

            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                href={feature.href}
                index={index}
              />
            ))}
          </View>
          {/* Tech Stack Section */}
          <Animated.View entering={FadeInDown.delay(1800).duration(600)} className="mt-8 px-6">
            <Text className="mb-2 text-2xl font-bold text-gray-900">🛠 Tech Stack</Text>
            <Text className="mb-4 leading-6 text-gray-600">Built with the latest and greatest tools</Text>
            <View className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <View className="-m-1 flex-row flex-wrap justify-center">
                {techStack.map((tech, index) => (
                  <TechBadge key={tech.name} name={tech.name} color={tech.color} index={index} />
                ))}
              </View>
            </View>
          </Animated.View>
          {/* Action Section */}
          <Animated.View entering={FadeInDown.delay(2000).duration(600)} className="mt-8 gap-y-4 px-6">
            <Text className="mb-4 text-center text-2xl font-bold text-gray-900">Ready to Build?</Text>

            <ActionButton
              title="Start Development"
              icon="play-circle"
              variant="primary"
              onPress={() => console.log("Get Started pressed")}
            />

            <ActionButton
              title="View Documentation"
              icon="document-text"
              variant="secondary"
              onPress={() => console.log("Documentation pressed")}
            />

            <ActionButton
              title="GitHub Repository"
              icon="logo-github"
              variant="secondary"
              onPress={() => Linking.openURL("https://github.com/JanSzewczyk/react-native-szumplate")}
            />
          </Animated.View>
          {/* Footer */}
          <Animated.View
            entering={FadeInDown.delay(2200).duration(600)}
            className="mt-12 items-center border-t border-gray-200 px-6 pt-8"
          >
            <View className="items-center gap-y-3">
              <Text className="text-base font-medium text-gray-700">Made with ❤️ for the React Native Community</Text>
              <View className="rounded-full bg-gray-100 px-4 py-2">
                <Text className="text-sm font-medium text-gray-600">Version 1.0.0 • Production Ready</Text>
              </View>
            </View>
          </Animated.View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}
