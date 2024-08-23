import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-blue-50">
      <Text className="text-red-500"> Ryde App</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
