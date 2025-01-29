import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { Canvas, Circle, Group } from "@shopify/react-native-skia";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  useFrameCallback,
  makeMutable,
} from "react-native-reanimated";
import { Link } from "expo-router";
import CustomText from "./CustomStartText";

type Particle = {
  x: Animated.SharedValue<number>;
  y: Animated.SharedValue<number>;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
};

export default function NightSky() {
  const { width, height } = useWindowDimensions();
  const textOpacity = useSharedValue(0);
  const buttonScale = useSharedValue(1);

  // Create particles using Reanimated compatible values
  const particles = useMemo(
    () =>
      Array.from(
        { length: 200 },
        () =>
          ({
            x: makeMutable(Math.random() * width),
            y: makeMutable(Math.random() * height),
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 5,
            alpha: Math.random(),
          } as Particle)
      ),
    [width, height]
  );

  // Initialize animation
  useEffect(() => {
    textOpacity.value = withTiming(1, { duration: 2000 });
  }, []);

  // Animation loop using Reanimated frame callback
  useFrameCallback(() => {
    "worklet";
    particles.forEach((particle) => {
      particle.x.value += particle.vx;
      particle.y.value += particle.vy;

      // Wrap around screen edges
      if (particle.x.value < 0) particle.x.value = width;
      if (particle.x.value > width) particle.x.value = 0;
      if (particle.y.value < 0) particle.y.value = height;
      if (particle.y.value > height) particle.y.value = 0;
    });
  }, true);

  // Button animation handler
  const handleButtonPress = () => {
    buttonScale.value = withTiming(0.95, { duration: 100 }, () => {
      buttonScale.value = withTiming(1);
    });
  };

  const buttonAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: buttonScale.value }],
  }));

  return (
    <View style={styles.container}>
      {/* Animated Star Background */}
      <Canvas style={styles.canvas}>
        <Group>
          {particles.map((particle, index) => (
            <Circle
              key={index}
              cx={particle.x}
              cy={particle.y}
              r={particle.radius}
              color={`rgba(53, 77, 57, ${particle.alpha})`}
            />
          ))}
        </Group>
      </Canvas>

      {/* Content Container */}
      <View style={styles.content}>
        <Animated.Text style={[styles.title, { opacity: textOpacity }]}>
          Busha
        </Animated.Text>

        <Animated.View style={[styles.buttonContainer, buttonAnimatedStyle]}>
          <Link
            href={"/signin"}
            style={[styles.button, styles.outlineButton]}
            asChild
          >
            <TouchableOpacity onPressIn={handleButtonPress}>
              <Text style={styles.color}>Sign in</Text>
            </TouchableOpacity>
          </Link>

          <Link
            href={"/signup"}
            style={[styles.button, styles.outlineButton]}
            asChild
          >
            <TouchableOpacity onPressIn={handleButtonPress}>
              <Text style={styles.color}>Sign up</Text>
            </TouchableOpacity>
          </Link>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  canvas: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginTop: 50,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 500,
  },
  button: {
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: "#293D3D",
  },
  outlineButton: {
    borderWidth: 2,
    borderColor: "#293D3D",
  },
  color: {
    color: "white",
  },
});
