import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

type ErrorScreenProps = {
  error?: { message?: string };
  reset: () => void;
};

export default function ErrorScreen({ error, reset }: ErrorScreenProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Something went wrong</Text>
      <Text style={styles.message}>{error?.message || "Unknown error"}</Text>
      <Button title="Try Again" onPress={reset} />
      <Button title="Go Home" onPress={() => router.replace("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  message: {
    color: "red",
    marginBottom: 20,
    textAlign: "center",
  },
});
