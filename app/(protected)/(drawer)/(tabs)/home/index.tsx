import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView>
      <Text>index</Text>
      <Link
        href={"/temp-file"}
        className="mt-8 text-center text-sm text-gray-500 "
        style={{ textDecorationLine: "underline" }}
      >
        More Info
      </Link>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
