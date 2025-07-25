import React, { useState, useRef } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import OnboardingScreen from "@/components/OnboardingScreen/OnboardingScreen";
import { ProgressBar } from "@/components/ProgressBar/ProgressBar";

const { width: screenWidth } = Dimensions.get("window");

const onboardingData = [
  {
    title: "Unlock your full potential and achieve your goals.",
    description:
      "Join us to explore a world of opportunities and resources tailored just for you. Start your journey towards success today!",
    imageSource: require("@/assets/images/starting-rocket.png"),
    buttonCTA: "Continue",
  },
  {
    title: "Discover new possibilities and expand your horizons.",
    description:
      "Embrace the journey ahead and unlock a wealth of knowledge and skills. Your future is bright, and we're here to guide you every step of the way!",
    imageSource: require("@/assets/images/starting-rocket.png"),
    buttonCTA: "Continue",
  },
  {
    title: "Join our community and connect with like-minded individuals.",
    description:
      "Engage with a vibrant community that shares your interests and passions.",
    imageSource: require("@/assets/images/starting-rocket.png"),
    buttonCTA: "Join Now",
  },
];

export default function StepOne() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const router = useRouter();

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      scrollViewRef.current?.scrollTo({
        x: nextIndex * screenWidth,
        animated: true,
      });
    } else {
      // Navigate to auth/register when done
      router.replace("/(auth)/register");
    }
  };

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ProgressBar step={currentIndex + 1} total={onboardingData.length} />
      <View className="my-2" />
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        className="flex-1"
      >
        {onboardingData.map((screen, index) => (
          <View key={index} style={{ width: screenWidth }} className="flex-1">
            <OnboardingScreen
              title={screen.title}
              description={screen.description}
              imageSource={screen.imageSource}
              buttonCTA={screen.buttonCTA}
              onPress={handleNext}
            />
          </View>
        ))}
      </ScrollView>

      {/* Page Indicators */}
      <View className="flex-row justify-center mb-4 mt-4">
        {onboardingData.map((_, index) => (
          <View
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}
