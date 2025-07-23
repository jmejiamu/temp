import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface ProgressBarProps {
  step: number;
  total: number;
}

// Simple ProgressBar component
export const ProgressBar = ({ step, total }: ProgressBarProps) => {
  const progress = step / total;
  return (
    <View style={{ marginHorizontal: 16 }}>
      <Text className="text-lg font-bold mb-2">
        Step {step} of {total}
      </Text>
      <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <View
          className="bg-blue-600 h-full rounded-full"
          style={{ width: `${progress * 100}%` }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
