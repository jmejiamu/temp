import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useNavigation, useRouter } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, persistor, RootState } from "@/redux/store/store";
import { setData } from "@/redux/features/dataSlice/dataSlice";
import { logout } from "@/redux/features/auth/authSlice";
import { Button, ButtonText } from "@/components/ui/button";

const Home = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const userData = useSelector((state: RootState) => state.userData);
  const userAuth = useSelector((state: RootState) => state.auth);
  const handleSave = () => {
    dispatch(setData({ name: "Alice", email: "test@gmail.com" }));
  };
  const handleLogout = () => {
    dispatch(logout());
    persistor.purge();
    router.replace("/(onboarding)");
  };
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

        <Text>Name: {userAuth.name}</Text>
        <Text>Email: {userAuth.email}</Text>
        <Text>Auth: {userAuth.isLoggedIn ? "Logged In" : "Logged Out"}</Text>
        <Button
          size="xl"
          variant="solid"
          action="primary"
          className="rounded-full mt-8"
          onPress={handleSave}
        >
          <ButtonText>Change state</ButtonText>
        </Button>
        <Button
          size="xl"
          variant="solid"
          action="primary"
          className="rounded-full mt-8"
          onPress={handleLogout}
        >
          <ButtonText>Logout</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
