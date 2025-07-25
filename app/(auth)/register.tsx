import CustomInput from "@/components/CustomInput/CustomInput";
import { Button, ButtonText } from "@/components/ui/button";
import { useForm } from "@/hooks/useForm/useForm";
import { IRegistration } from "@/types/registration";
import { registrationValidation } from "@/validation/registrationValidation";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
  const initialFormData: IRegistration = {
    email: "",
    password: "",
  };
  const { handleChange, errors, formData, validate } = useForm<IRegistration>(
    initialFormData,
    registrationValidation
  );
  console.log("🚀 ~ Register ~ errors:", errors);

  const handleSubmit = () => {
    const isValidForm = validate();
    console.log("🚀 ~ handleSubmit ~ isValidForm:", isValidForm);
    console.log("Form submitted:", formData);
  };

  //+503-7852-6023

  return (
    <SafeAreaView className="flex-1 bg-white ">
      <View className="px-4">
        <View className="gap-8">
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
          className="rounded-full"
          onPress={handleSubmit}
        >
          <ButtonText>Sign up</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
}
