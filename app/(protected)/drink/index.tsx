import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const DrinkIndex = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const drink = params.drink ? JSON.parse(params.drink as string) : null;
  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <View className="mx-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="border border-gray-200 rounded-lg h-10 w-10 justify-center  items-center"
          >
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-lg font-bold">
            {drink ? drink.strDrink : "No drink found"}
          </Text>
          <Image
            source={{ uri: drink.strDrinkThumb }}
            className="w-full rounded-lg"
            resizeMode="cover"
            style={{ height: "95%" }}
          />
          <View className="gap-2 mt-4 mb-4">
            <Text className="">Type</Text>
            <Text className="text-sm text-gray-500">
              {drink ? drink.strAlcoholic : "No alcohol information found"}
            </Text>
          </View>
          <View className="gap-5">
            <Text>Instruction</Text>
            <Text className="text-sm text-gray-500">
              {drink ? drink.strInstructions : "No instructions found"}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DrinkIndex;

const styles = StyleSheet.create({});
