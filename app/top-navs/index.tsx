import { View, Text, ScrollView, RefreshControl } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function CurrentScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Fetch weather data
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <ScrollView
      className="flex-1 bg-gray-50"
      contentContainerClassName="p-4"
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <LinearGradient colors={["#4facfe", "#00f2fe"]} style={{ borderRadius: 20, padding: 24, marginBottom: 16 }}>
        <View className="mb-5 flex-row items-center">
          <Ionicons name="location" size={20} color="#fff" />
          <Text className="ml-2 text-xl font-semibold text-white">San Francisco, CA</Text>
        </View>

        <View className="mb-8 items-center">
          <Text className="text-7xl font-light text-white">72°</Text>
          <Text className="mt-2 text-2xl text-white">Partly Cloudy</Text>
        </View>

        <View className="flex-row justify-around">
          <View className="items-center">
            <Text className="mb-1 text-sm text-gray-50">Feels Like</Text>
            <Text className="text-lg font-semibold text-white">75°</Text>
          </View>
          <View className="items-center">
            <Text className="mb-1 text-sm text-gray-50">Humidity</Text>
            <Text className="text-lg font-semibold text-white">65%</Text>
          </View>
          <View className="items-center">
            <Text className="mb-1 text-sm text-gray-50">Wind</Text>
            <Text className="text-lg font-semibold text-white">12 mph</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Additional Weather Info Cards */}
      <View className="mb-4 rounded-2xl border border-gray-100 bg-white p-5">
        <Text className="mb-4 text-lg font-semibold text-gray-900">Weather Details</Text>
        <View className="flex-row justify-between border-b border-gray-100 py-3">
          <Text className="text-sm text-gray-600">Pressure</Text>
          <Text className="text-sm font-semibold text-gray-900">30.15 in</Text>
        </View>
        <View className="flex-row justify-between border-b border-gray-100 py-3">
          <Text className="text-sm text-gray-600">Visibility</Text>
          <Text className="text-sm font-semibold text-gray-900">10 mi</Text>
        </View>
        <View className="flex-row justify-between border-b border-gray-100 py-3">
          <Text className="text-sm text-gray-600">UV Index</Text>
          <Text className="text-sm font-semibold text-gray-900">5 (Moderate)</Text>
        </View>
      </View>
    </ScrollView>
  );
}
