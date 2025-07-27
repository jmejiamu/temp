import CustomInput from "@/components/CustomInput/CustomInput";
import { Button, ButtonSpinner, ButtonText } from "@/components/ui/button";
import { useForm } from "@/hooks/useForm/useForm";
import { setAuth } from "@/redux/features/auth/authSlice";
import { AppDispatch } from "@/redux/store/store";
import { ILogin } from "@/types/sigin";
import { signInValidation } from "@/validation/siginValidation";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

export default function Login() {
  const initialFormData: ILogin = {
    email: "",
    password: "",
  };

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { handleChange, errors, formData, validate } = useForm<ILogin>(
    initialFormData,
    signInValidation
  );

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    const isValidForm = validate();
    setTimeout(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        if (isValidForm) {
          router.replace("/home");
        }
      }, 2000); // loading will be false after 2 seconds
    });
    if (isValidForm) {
      dispatch(
        setAuth({
          email: formData.email,
          isLoggedIn: true,
        })
      );
    }

    // how can set the loading to false after the validation?
  };

  return (
    <SafeAreaView className="flex-1 bg-white ">
      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-4 border border-gray-200 rounded-lg h-10 w-10 justify-center  items-center"
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <View className="px-4 justify-center flex-1">
        <View className="gap-8">
          <Text className="text-5xl font-semibold">Log in</Text>

          <CustomInput
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
            error={errors.email}
            placeholder={"Enter your email"}
            keyboardType="email-address"
          />

          <CustomInput
            value={formData.password}
            onChangeText={(text) => handleChange("password", text)}
            error={errors.password}
            placeholder={"Enter your password"}
            secureTextEntry={true}
          />
        </View>
        <Link
          href={"/forgot-password"}
          className="mt-8  text-sm text-gray-500 "
          style={{ textDecorationLine: "underline" }}
        >
          Forgot your password?
        </Link>
        <Button
          size="xl"
          variant="solid"
          action="primary"
          className="rounded-full mt-8"
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <ButtonSpinner color={"white"} />
          ) : (
            <ButtonText>Log in</ButtonText>
          )}
        </Button>

        <Link
          href={"/register"}
          className="mt-8 text-center text-sm text-gray-500 "
          style={{ textDecorationLine: "underline" }}
        >
          I don't have an account? Sign up
        </Link>
      </View>
    </SafeAreaView>
  );
}
