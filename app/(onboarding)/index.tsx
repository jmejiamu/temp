import OnboardingScreen from "@/components/OnboardingScreen/OnboardingScreen";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();
  return (
    <OnboardingScreen
      title="Unlock your full potential and achieve your goals."
      description="Join us to explore a world of opportunities and resources tailored just for you. Start your journey towards success today!"
      buttonCTA="Get Started"
      imageSource={require("@/assets/images/starting-rocket.png")}
    />
  );
}
