import { FlatList, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type HourlyItem = {
  id: string;
  time: string;
  temp: number;
  icon: "partly-sunny" | "cloudy" | "rainy" | "sunny";
  precipitation: number;
};

const hourlyData = Array.from({ length: 24 }, (_, i) => ({
  id: i.toString(),
  time: `${i % 12 || 12}:00 ${i < 12 ? "AM" : "PM"}`,
  temp: Math.floor(65 + Math.random() * 20),
  icon: ["partly-sunny", "cloudy", "rainy", "sunny"][Math.floor(Math.random() * 4)],
  precipitation: Math.floor(Math.random() * 100)
})) as Array<HourlyItem>;

export default function HourlyScreen() {
  return (
    <View className="flex-1 items-start bg-gray-50">
      <FlatList
        data={hourlyData}
        renderItem={({ item }) => (
          <View className="w-28 items-center rounded-lg bg-white p-4">
            <Text className="mb-3 text-sm text-gray-600">{item.time}</Text>
            <Ionicons name={item.icon} size={32} color="#9ca3af" />
            <Text className="mt-2 text-xl font-semibold text-gray-900">{item.temp}°</Text>
            <View className="mt-2 flex-row items-center">
              <Ionicons name="water-outline" size={14} color="#60a5fa" />
              <Text className="ml-1 text-sm text-blue-400">{item.precipitation}%</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="p-4 gap-x-4"
        className="flex-grow-0"
      />
    </View>
  );
}
