import { FlatList, View, Text, StyleSheet, FlatListProps } from "react-native";
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
            <Text style={styles.time}>{item.time}</Text>
            <Ionicons name={item.icon} size={32} color="#666" />
            <Text style={styles.temp}>{item.temp}°</Text>
            <View style={styles.precipContainer}>
              <Ionicons name="water-outline" size={14} color="#4facfe" />
              <Text style={styles.precip}>{item.precipitation}%</Text>
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

const styles = StyleSheet.create({
  hourItem: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    alignItems: "center",
    minWidth: 80
  },
  time: {
    fontSize: 12,
    color: "#666",
    marginBottom: 12
  },
  temp: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginTop: 8
  },
  precipContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8
  },
  precip: {
    fontSize: 12,
    color: "#4facfe",
    marginLeft: 4
  }
});
