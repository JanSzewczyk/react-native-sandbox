// import { StyleSheet, Text, View } from "react-native";
//
// export default function TabOneScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Tab One</Text>
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold"
//   }
// });

import { View, Text, ScrollView, StyleSheet, RefreshControl } from "react-native";
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
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <LinearGradient colors={["#4facfe", "#00f2fe"]} style={styles.weatherCard}>
        <View style={styles.locationContainer}>
          <Ionicons name="location" size={20} color="#fff" />
          <Text style={styles.location}>San Francisco, CA</Text>
        </View>

        <View style={styles.mainWeather}>
          <Text style={styles.temperature}>72°</Text>
          <Text style={styles.condition}>Partly Cloudy</Text>
        </View>

        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Feels Like</Text>
            <Text style={styles.detailValue}>75°</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Humidity</Text>
            <Text style={styles.detailValue}>65%</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Wind</Text>
            <Text style={styles.detailValue}>12 mph</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Additional Weather Info Cards */}
      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>Weather Details</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Pressure</Text>
          <Text style={styles.infoValue}>30.15 in</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Visibility</Text>
          <Text style={styles.infoValue}>10 mi</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>UV Index</Text>
          <Text style={styles.infoValue}>5 (Moderate)</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  contentContainer: {
    padding: 16
  },
  weatherCard: {
    borderRadius: 20,
    padding: 24,
    marginBottom: 16
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  location: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 8,
    fontWeight: "500"
  },
  mainWeather: {
    alignItems: "center",
    marginBottom: 30
  },
  temperature: {
    fontSize: 72,
    fontWeight: "200",
    color: "#fff"
  },
  condition: {
    fontSize: 24,
    color: "#fff",
    marginTop: 8
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  detailItem: {
    alignItems: "center"
  },
  detailLabel: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 12,
    marginBottom: 4
  },
  detailValue: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600"
  },
  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    color: "#333"
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0"
  },
  infoLabel: {
    color: "#666",
    fontSize: 14
  },
  infoValue: {
    color: "#333",
    fontSize: 14,
    fontWeight: "600"
  }
});
