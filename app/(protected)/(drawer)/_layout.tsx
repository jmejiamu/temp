import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name="(tabs)" // This is the name of the page and must match the url from root
          options={{
            title: "Home",
            headerShown: false, // Hide the header for this screen
          }}
        />
        <Drawer.Screen
          name="about" // This is the name of the page and must match the url from root
          options={{
            title: "About",
            headerShown: false, // Hide the header for this screen
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
