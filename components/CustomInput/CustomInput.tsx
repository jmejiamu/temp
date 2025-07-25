import { StyleSheet, TextInputProps } from "react-native";
import React from "react";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
} from "../ui/form-control";
import { Input, InputField } from "../ui/input";

interface CustomInputProps extends TextInputProps {
  error?: string;
}

const CustomInput = ({ error, ...rest }: CustomInputProps) => {
  return (
    <FormControl isInvalid={!!error}>
      <Input variant="outline" size="lg" isInvalid={!!error}>
        <InputField {...rest} />
      </Input>
      {error && (
        <FormControlError>
          <FormControlErrorText className="font-medium text-sm">
            {error}
          </FormControlErrorText>
        </FormControlError>
      )}
    </FormControl>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
