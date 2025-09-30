import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext(Navigator);

export default function TopNavsLayout() {
  return (
    <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-white">
      <MaterialTopTabs
        initialRouteName="index"
        screenOptions={{
          lazy: true,
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "#666",
          tabBarLabelStyle: styles.tabLabel,
          tabBarStyle: styles.tabBar,
          tabBarItemStyle: { width: "auto" },
          tabBarIndicatorStyle: styles.tabIndicator,
          tabBarPressColor: "#e0e0e0",
          tabBarScrollEnabled: true,
          swipeEnabled: true,
          tabBarBounces: true
        }}
        tabBarPosition="top"
      >
        <MaterialTopTabs.Screen
          name="index"
          options={{
            title: "Current"
          }}
        />
        <MaterialTopTabs.Screen
          name="two"
          options={{
            title: "Hourly"
          }}
        />
        <MaterialTopTabs.Screen
          name="three"
          options={{
            title: "Third Tab"
          }}
        />
        <MaterialTopTabs.Screen
          name="four"
          options={{
            title: "Fourth Tab - really long title"
          }}
        />
      </MaterialTopTabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0"
  },
  tabIndicator: {
    backgroundColor: "#007AFF",
    height: 2
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: "600",
    textTransform: "none"
  }
});
