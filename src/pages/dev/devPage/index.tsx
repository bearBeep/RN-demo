import Animated, {
  useSharedValue,
  useFrameCallback,
  useAnimatedStyle,
  withSequence,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import React from 'react';

export default function CardView() {
  const exiting = (values) => {
    'worklet';
    const animations = {
      originX: withTiming(width, { duration: 3000 }),
      opacity: withTiming(0.5, { duration: 2000 }),
    };
    const initialValues = {
      originX: values.currentOriginX,
      opacity: 1,
    };
    return {
      initialValues,
      animations,
    };
  };

  return (
    <Animated.View style={[styles.animatedView]} exiting={exiting}>
      <Text> Card Example </Text>
    </Animated.View>
  );
}