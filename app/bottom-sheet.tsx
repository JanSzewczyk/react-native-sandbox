import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetRef } from "~/components/bottom-sheet";

const App = () => {
  const bottomSheetRef = React.useRef<BottomSheetRef>(null);

  const handleOpenSheet = (): void => {
    bottomSheetRef.current?.open(1);
  };

  const handleSheetClose = (): void => {
    console.log("Sheet closed");
  };

  const handleSheetOpen = (): void => {
    console.log("Sheet opened");
  };

  return (
    <GestureHandlerRootView style={styles.exampleContainer}>
      <View style={styles.mainContent}>
        <Text style={styles.title}>Bottom Sheet Example</Text>

        <TouchableWithoutFeedback onPress={handleOpenSheet}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Open Bottom Sheet</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[0.25, 0.5, 0.9]}
        onClose={handleSheetClose}
        onOpen={handleSheetOpen}
      >
        <View style={styles.sheetContent}>
          <Text style={styles.sheetTitle}>Bottom Sheet Content</Text>
          <Text style={styles.sheetText}>
            This is a fully functional bottom sheet component built with React Native, Reanimated 3, and Gesture Handler
            2. It supports:
          </Text>

          <View style={styles.features}>
            <Text style={styles.feature}>✓ Multiple snap points</Text>
            <Text style={styles.feature}>✓ Smooth animations</Text>
            <Text style={styles.feature}>✓ Gesture handling</Text>
            <Text style={styles.feature}>✓ Overlay support</Text>
            <Text style={styles.feature}>✓ Imperative API</Text>
            <Text style={styles.feature}>✓ Customizable styling</Text>
            <Text style={styles.feature}>✓ Full TypeScript support</Text>
          </View>

          {/* Add more content to demonstrate scrolling */}
          {[...Array(20)].map((_, i) => (
            <View key={i} style={styles.item}>
              <Text>Item {i + 1}</Text>
            </View>
          ))}
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  header: {
    alignItems: "center",
    paddingVertical: 15
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2
  },
  content: {
    flex: 1
  },

  // Example styles
  exampleContainer: {
    flex: 1,
    backgroundColor: "#f0f0f0"
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600"
  },
  sheetContent: {
    padding: 20
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15
  },
  sheetText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    lineHeight: 24
  },
  features: {
    marginBottom: 30
  },
  feature: {
    fontSize: 16,
    marginVertical: 5,
    color: "#333"
  },
  item: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    marginVertical: 5,
    borderRadius: 8
  }
});

export default App;
