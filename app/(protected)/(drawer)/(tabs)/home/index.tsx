import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="mx-4">
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Link
          href={"/temp-file"}
          className="mt-8 text-center text-sm text-gray-500 "
          style={{ textDecorationLine: "underline" }}
        >
          More Info
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
