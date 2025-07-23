import { ImageSourcePropType, StyleSheet, View, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { Button, ButtonText } from "../ui/button";
import { Href, useRouter } from "expo-router";

interface OnboardingScreenProps {
  path?: Href;
  title: string;
  description: string;
  buttonCTA: string;
  imageSource?: ImageSourcePropType; // Optional image source
  onPress?: () => void; // Optional onPress handler
}

const OnboardingScreen = (props: OnboardingScreenProps) => {
  const router = useRouter();
  const imageOpacity = useRef(new Animated.Value(0)).current;
  const imageTranslateY = useRef(new Animated.Value(30)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const textTranslateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    // Animate image first
    Animated.parallel([
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(imageTranslateY, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // Animate text with slight delay
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(textTranslateY, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ]).start();
    }, 300);
  }, []);

  return (
    <>
      <View className="flex-1 mx-4">
        <Animated.Image
          source={props.imageSource}
          className="rounded-2xl bg-red-200 w-full h-3/5"
          resizeMode="contain"
          style={{
            opacity: imageOpacity,
            transform: [{ translateY: imageTranslateY }],
          }}
        />
        <Animated.Text
          className="text-3xl font-bold text-blue-500 mt-12"
          style={{
            opacity: textOpacity,
            transform: [{ translateY: textTranslateY }],
          }}
        >
          {props.title}
        </Animated.Text>
        <Animated.Text
          className="text-lg text-gray-400 font-semibold mt-4"
          style={{
            opacity: textOpacity,
            transform: [{ translateY: textTranslateY }],
          }}
        >
          {props.description}
        </Animated.Text>
      </View>
      <View className="mt-auto mx-4">
        <Button
          size="xl"
          variant="solid"
          action="primary"
          className="rounded-full"
          onPress={
            props.onPress ||
            (() => router.navigate(props.path || "/onboarding-screen"))
          }
        >
          <ButtonText>{props.buttonCTA}</ButtonText>
        </Button>
      </View>
    </>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
