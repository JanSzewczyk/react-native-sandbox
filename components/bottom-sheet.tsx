import React, { useCallback, useImperativeHandle, forwardRef, ReactNode } from "react";
import { View, StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolate,
  runOnJS,
  useAnimatedScrollHandler,
  useDerivedValue,
  clamp,
  WithSpringConfig
} from "react-native-reanimated";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

// Type definitions
export interface BottomSheetRef {
  open: (snapIndex?: number) => void;
  close: () => void;
  snapToIndex: (index: number) => void;
}

export interface BottomSheetProps {
  children: ReactNode;
  snapPoints?: number[]; // Percentage of screen height (0-1)
  enableOverlay?: boolean;
  enablePanDownToClose?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  backgroundColor?: string;
  handleColor?: string;
  overlayColor?: string;
  animationConfig?: WithSpringConfig;
}

interface PanGestureContext {
  startY: number;
}

const BottomSheet = forwardRef<BottomSheetRef, BottomSheetProps>(
  (
    {
      children,
      snapPoints = [0.25, 0.5, 0.9],
      enableOverlay = true,
      enablePanDownToClose = true,
      onClose,
      onOpen,
      backgroundColor = "white",
      handleColor = "#DDDDDD",
      overlayColor = "rgba(0, 0, 0, 0.5)",
      animationConfig = {
        damping: 20,
        stiffness: 90
      }
    },
    ref
  ) => {
    // Convert snap points from percentages to pixels
    const snapPointsPixels = snapPoints.map((point) => SCREEN_HEIGHT * point);
    const maxTranslateY = SCREEN_HEIGHT;

    // Shared values with proper types
    const translateY = useSharedValue<number>(maxTranslateY);
    const scrollOffset = useSharedValue<number>(0);
    const bottomSheetHeight = useSharedValue<number>(snapPointsPixels[0]);
    const context = useSharedValue<PanGestureContext>({ startY: 0 });

    // Track if sheet is open
    const isOpen = useDerivedValue<boolean>(() => translateY.value < maxTranslateY);

    // Find closest snap point
    const findClosestSnapPoint = useCallback(
      (currentY: number): number => {
        "worklet";
        const currentHeight = maxTranslateY - currentY;
        let closestPoint = maxTranslateY; // closed position
        let minDistance = Math.abs(currentHeight);

        snapPointsPixels.forEach((snapHeight) => {
          const snapY = maxTranslateY - snapHeight;
          const distance = Math.abs(currentY - snapY);
          if (distance < minDistance) {
            minDistance = distance;
            closestPoint = snapY;
          }
        });

        // Check if should close
        if (enablePanDownToClose && currentHeight < snapPointsPixels[0] * 0.5) {
          closestPoint = maxTranslateY;
        }

        return closestPoint;
      },
      [snapPointsPixels, maxTranslateY, enablePanDownToClose]
    );

    // Snap to point
    const snapToPoint = useCallback(
      (destinationY: number): void => {
        "worklet";
        translateY.value = withSpring(destinationY, animationConfig);

        const newHeight = maxTranslateY - destinationY;
        bottomSheetHeight.value = withSpring(newHeight, animationConfig);

        if (destinationY >= maxTranslateY && onClose) {
          runOnJS(onClose)();
        } else if (destinationY < maxTranslateY && onOpen) {
          runOnJS(onOpen)();
        }
      },
      [animationConfig, maxTranslateY, onClose, onOpen, translateY, bottomSheetHeight]
    );

    // Scroll handler with proper typing
    const scrollHandler = useAnimatedScrollHandler({
      onScroll: (event) => {
        scrollOffset.value = event.contentOffset.y;
      }
    });

    // Pan gesture with proper typing
    const panGesture = Gesture.Pan()
      .onStart(() => {
        context.value = { startY: translateY.value };
      })
      .onUpdate((event) => {
        // If scrolling up and already at the top of the sheet
        if (scrollOffset.value <= 0) {
          translateY.value = clamp(
            context.value.startY + event.translationY,
            maxTranslateY - snapPointsPixels[snapPointsPixels.length - 1],
            maxTranslateY
          );
        }
      })
      .onEnd((event) => {
        const velocity = event.velocityY;
        const currentY = translateY.value;

        // Determine destination based on velocity and position
        let destinationY: number;
        if (Math.abs(velocity) > 500) {
          // Fast swipe
          if (velocity > 0) {
            // Swiping down - find next lower snap point
            const currentHeight = maxTranslateY - currentY;
            destinationY = maxTranslateY; // default to close
            for (let i = snapPointsPixels.length - 1; i >= 0; i--) {
              if (snapPointsPixels[i] < currentHeight - 10) {
                destinationY = maxTranslateY - snapPointsPixels[i];
                break;
              }
            }
          } else {
            // Swiping up - find next higher snap point
            const currentHeight = maxTranslateY - currentY;
            destinationY = maxTranslateY - snapPointsPixels[0]; // default to lowest
            for (let i = 0; i < snapPointsPixels.length; i++) {
              if (snapPointsPixels[i] > currentHeight + 10) {
                destinationY = maxTranslateY - snapPointsPixels[i];
                break;
              }
            }
          }
        } else {
          // Slow drag - snap to closest
          destinationY = findClosestSnapPoint(currentY);
        }

        snapToPoint(destinationY);
      });

    // Imperative handle for external control
    useImperativeHandle(
      ref,
      (): BottomSheetRef => ({
        open: (snapIndex: number = 0): void => {
          const index = Math.min(Math.max(0, snapIndex), snapPointsPixels.length - 1);
          snapToPoint(maxTranslateY - snapPointsPixels[index]);
        },
        close: (): void => {
          snapToPoint(maxTranslateY);
        },
        snapToIndex: (index: number): void => {
          const clampedIndex = Math.min(Math.max(0, index), snapPointsPixels.length - 1);
          snapToPoint(maxTranslateY - snapPointsPixels[clampedIndex]);
        }
      }),
      [snapPointsPixels, maxTranslateY, snapToPoint]
    );

    // Animated styles with proper typing
    const bottomSheetStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: translateY.value }]
      };
    });

    const overlayStyle = useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          translateY.value,
          [maxTranslateY - snapPointsPixels[snapPointsPixels.length - 1], maxTranslateY],
          [1, 0]
        )
      };
    });

    const contentSheetStyle = useAnimatedStyle(() => {
      return {
        maxHeight: bottomSheetHeight.value - 30
      };
    });

    const handleClose = useCallback((): void => {
      snapToPoint(maxTranslateY);
    }, [snapToPoint, maxTranslateY]);

    return (
      <>
        {enableOverlay ? (
          <TouchableWithoutFeedback onPress={handleClose}>
            <Animated.View
              style={[styles.overlay, overlayStyle, { backgroundColor: overlayColor }]}
              pointerEvents={isOpen.value ? "auto" : "none"}
            />
          </TouchableWithoutFeedback>
        ) : null}

        <Animated.View style={[styles.container, bottomSheetStyle, { backgroundColor }]}>
          <GestureDetector gesture={panGesture}>
            <Animated.View style={styles.header}>
              <View style={[styles.handle, { backgroundColor: handleColor }]} />
            </Animated.View>
          </GestureDetector>

          <Animated.ScrollView
            style={[styles.content, { height: bottomSheetHeight.value - 30 }]}
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            bounces={false}
            showsVerticalScrollIndicator={false}
          >
            {children}
          </Animated.ScrollView>
        </Animated.View>
      </>
    );
  }
);

BottomSheet.displayName = "BottomSheet";

const styles = StyleSheet.create({
  // Bottom Sheet styles
  container: {
    zIndex: 30,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: SCREEN_HEIGHT,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5
  },
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

export default BottomSheet;
