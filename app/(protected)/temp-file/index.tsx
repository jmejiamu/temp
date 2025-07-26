import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function TempScreen() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-4 border border-gray-200 rounded-lg h-10 w-10 justify-center  items-center"
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <Text>Example of stand alone screen</Text>
      <Text>Screen that it is not part of the Drawer nor bottom tab</Text>
    </SafeAreaView>
  );
}
