import CustomInput from "@/components/CustomInput/CustomInput";
import { Button, ButtonSpinner, ButtonText } from "@/components/ui/button";
import { useForm } from "@/hooks/useForm/useForm";
import { IForgotPassword } from "@/types/forgotPassword";
import { forgotPasswordValidation } from "@/validation/forgotPasswordValidation";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgotPassword() {
  const initialFormData: IForgotPassword = {
    email: "",
  };

  const router = useRouter();
  const { handleChange, errors, formData, validate } = useForm<IForgotPassword>(
    initialFormData,
    forgotPasswordValidation
  );

  const [loading, setLoading] = useState(false);

  console.log("🚀 ~ Register ~ errors:", errors);

  const handleSubmit = () => {
    const isValidForm = validate();
    console.log("🚀 ~ handleSubmit ~ isValidForm:", isValidForm);
    setTimeout(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        if (isValidForm) {
          router.replace("/login");
        }
      }, 2000); // loading will be false after 2 seconds
    });

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
          <Text className="text-5xl font-semibold">Forgot Password</Text>

          <CustomInput
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
            error={errors.email}
            placeholder={"Enter your email"}
            keyboardType="email-address"
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
            <ButtonText>Forgot Password</ButtonText>
          )}
        </Button>

        <Link
          href={"/login"}
          className="mt-8 text-center text-sm text-gray-500 "
          style={{ textDecorationLine: "underline" }}
        >
          I have an account? Sign in
        </Link>
      </View>
    </SafeAreaView>
  );
}
