import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const About = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-4 border border-gray-200 rounded-lg h-10 w-10 justify-center  items-center"
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <Text>About</Text>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({});
