import { Stack } from "expo-router";

export default function OnboardingLayout() {
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
      {/* <Stack.Screen name="step-two" options={{}} /> */}
    </Stack>
  );
}
