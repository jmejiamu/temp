import { RootState } from "@/redux/store/store";
import { Redirect, Stack, useRouter, useSegments } from "expo-router";
import React from "react";
import { useSelector } from "react-redux";

export default function OnboardingLayout() {
  const segments = useSegments() as string[];
  const router = useRouter();
  const SCREEN = "onboarding-screen";
  const showProgressBar = segments.includes(SCREEN);

  const userAuth = useSelector((state: RootState) => state.auth);

  {
    /* {showProgressBar && <ProgressBar step={2} total={3} />} */
  }

  if (userAuth?.isLoggedIn) {
    return <Redirect href="/home" />;
  }
  return (
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
  );
}
