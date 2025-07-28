import { Stack } from "expo-router";

export default function RecentSearchLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false, // Hide the header for this layout
          contentStyle: { backgroundColor: "white" },
        }}
      />
    </Stack>
  );
}
