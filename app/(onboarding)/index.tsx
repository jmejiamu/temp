import OnboardingScreen from "@/components/OnboardingScreen/OnboardingScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <OnboardingScreen
        title="Unlock your full potential and achieve your goals."
        description="Join us to explore a world of opportunities and resources tailored just for you. Start your journey towards success today!"
        buttonCTA="Get Started"
        imageSource={require("@/assets/images/starting-rocket.png")}
      />
    </SafeAreaView>
  );
}
