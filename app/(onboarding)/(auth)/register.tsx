import CustomInput from "@/components/CustomInput/CustomInput";
import { Button, ButtonSpinner, ButtonText } from "@/components/ui/button";
import { useForm } from "@/hooks/useForm/useForm";
import { setAuth } from "@/redux/features/auth/authSlice";
import { AppDispatch } from "@/redux/store/store";
import { IRegistration } from "@/types/registration";
import { registrationValidation } from "@/validation/registrationValidation";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

export default function Register() {
  const initialFormData: IRegistration = {
    name: "",
    email: "",
    password: "",
  };
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { handleChange, errors, formData, validate } = useForm<IRegistration>(
    initialFormData,
    registrationValidation
  );

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    const isValidForm = validate();
    // setTimeout(() => {
    //   setLoading(true);
    //   setTimeout(() => {
    //     setLoading(false);
    //     if (isValidForm) {
    //       router.replace("/home");
    //     }
    //   }, 2000); // loading will be false after 2 seconds
    // });

    if (isValidForm) {
      dispatch(
        setAuth({
          name: formData.name,
          email: formData.email,
          isLoggedIn: true,
        })
      );
      router.replace("/home");
    }
    // how can set the loading to false after the validation?
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-4 border border-gray-200 rounded-lg h-10 w-10 justify-center  items-center"
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <View className="px-4 justify-center flex-1">
        <View className="gap-8">
          <Text className="text-5xl font-semibold">Create Account</Text>
          <CustomInput
            value={formData.name}
            onChangeText={(text) => handleChange("name", text)}
            error={errors.name}
            placeholder={"Enter your name"}
          />

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
            <ButtonText>Sign up</ButtonText>
          )}
        </Button>

        <Link
          href={"/login"}
          className="mt-8 text-center text-sm text-gray-500 "
          style={{ textDecorationLine: "underline" }}
        >
          Already have an account? Log in
        </Link>
      </View>
    </SafeAreaView>
  );
}
