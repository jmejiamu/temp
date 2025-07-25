import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgotPassword() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text className="text-center text-2xl font-bold mb-4">
        Forgot Password
      </Text>
    </SafeAreaView>
  );
}
