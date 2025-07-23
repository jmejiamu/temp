import { Stack, useRouter, useSegments } from "expo-router";
import React from "react";
import { ProgressBar } from "@/components/ProgressBar/ProgressBar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingLayout() {
  const segments = useSegments() as string[];
  const router = useRouter();
  const SCREEN = "onboarding-screen";
  const showProgressBar = segments.includes(SCREEN);

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-white">
      {/* {showProgressBar && <ProgressBar step={2} total={3} />} */}
      <Stack
        initialRouteName="index"
        screenOptions={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerShown: false, // Hide the header for this layout
        }}
      >
        {/* Optionally configure static options outside the route.*/}
        <Stack.Screen name="index" options={{}} />
        <Stack.Screen name="onboarding-screen" options={{}} />
      </Stack>
    </SafeAreaView>
  );
}
