import { Tabs } from "expo-router";
import { View, Dimensions, Pressable } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring, interpolate } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import * as React from "react";

const { width } = Dimensions.get("window");
const TAB_WIDTH = width / 5;

interface TabBarIconProps {
  name: string;
  focused: boolean;
  label: string;
  onPress: () => void;
  hasNotification?: boolean;
}

const TabBarIcon = ({ name, focused, label, onPress, hasNotification = false }: TabBarIconProps) => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(focused ? 1 : 0.6);

  React.useEffect(() => {
    opacity.value = withSpring(focused ? 1 : 0.6, {
      damping: 15,
      stiffness: 150
    });
  }, [focused]);

  const handlePress = () => {
    if (!focused) {
      scale.value = withSpring(
        0.85,
        {
          damping: 15,
          stiffness: 300
        },
        () => {
          scale.value = withSpring(1, {
            damping: 15,
            stiffness: 300
          });
        }
      );
    }

    onPress();
  };

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value
  }));

  const animatedLabelStyle = useAnimatedStyle(() => ({
    color: `${interpolate(opacity.value, [0.6, 1], [0x666666, 0x0077b5])}`,
    opacity: opacity.value
  }));

  return (
    <Animated.View className="flex-1" style={animatedIconStyle}>
      <Pressable className="items-center py-2" onPress={handlePress}>
        <View className="relative mt-1">
          <Ionicons name={name as keyof typeof Ionicons.glyphMap} size={24} color={focused ? "#0077B5" : "#666666"} />
          {hasNotification && (
            <View className="absolute -right-0.5 -top-0.5 size-2 rounded border border-white bg-red-500" />
          )}
        </View>
        <Animated.Text className="text-xs font-medium" style={animatedLabelStyle}>
          {label}
        </Animated.Text>
      </Pressable>
    </Animated.View>
  );
};

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const indicatorPosition = useSharedValue(0);

  const tabs = [
    { key: "index", icon: "home", label: "Home" },
    { key: "network", icon: "people", label: "My Network" },
    { key: "post", icon: "add-circle", label: "Post" },
    { key: "notifications", icon: "notifications", label: "Notifications", hasNotification: true },
    { key: "jobs", icon: "briefcase", label: "Jobs" }
  ];

  React.useEffect(() => {
    indicatorPosition.value = withSpring(state.index * TAB_WIDTH, {
      damping: 40,
      stiffness: 200
    });
  }, [state.index]);

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorPosition.value }]
  }));

  return (
    <View className="elevation-lg flex-row border-t border-gray-100 bg-white py-2 pb-5 shadow-lg">
      <Animated.View
        className="absolute top-0 h-1 rounded-sm bg-blue-500"
        style={[{ width: TAB_WIDTH }, animatedIndicatorStyle]}
      />

      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        console.log(options);

        const isFocused = state.index === index;
        const tab = tabs[index];

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TabBarIcon
            key={route.key}
            name={isFocused ? tab.icon : `${tab.icon}-outline`}
            focused={isFocused}
            label={tab.label}
            hasNotification={tab.hasNotification}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0077B5"
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "LinkedIn",
          headerTitle: "LinkedIn"
        }}
      />
      <Tabs.Screen
        name="network"
        options={{
          title: "My Network",
          headerTitle: "My Network"
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: "Create Post",
          headerTitle: "Share"
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          headerTitle: "Notifications"
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          title: "Jobs",
          headerTitle: "Jobs"
        }}
      />
    </Tabs>
  );
}
