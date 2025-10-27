import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DrawerLayout() {
  const drawerContent = (props: any) => {
    return (
      <SafeAreaView>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Custom Drawer</Text>

        <Button
          title="Go to Home"
          onPress={() => props.navigation.navigate("(tabs)")}
        />
        <Button
          title="Go to About"
          onPress={() => props.navigation.navigate("about")}
        />
        <Button
          title="Go to Settings"
          onPress={() => props.navigation.navigate("settings/index")}
        />
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
        }}
        // drawerContent={(props) => drawerContent(props)}
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
        <Drawer.Screen
          name="setting/index" // This is the name of the page and must match the url from root
          options={{
            title: "Setting",
            headerShown: false, // Hide the header for this screen
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
