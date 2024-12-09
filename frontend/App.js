import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import "./global.css";
import TrainingsScreen from "./src/screens/TrainingsScreen";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-darkBg">
      <TrainingsScreen />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
