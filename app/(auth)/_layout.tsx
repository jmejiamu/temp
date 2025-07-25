import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{}} />
      <Stack.Screen name="register" options={{}} />
      <Stack.Screen name="forgot-password" options={{}} />
    </Stack>
  );
}
