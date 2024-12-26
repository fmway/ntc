import CardLine from "@/components/ui/CardLine";
import Title from "@/components/ui/Title";
import { StatusBar, View, Text, Image } from "react-native";

export default function HomeScreen() {
  return (
    <View className="w-screen min-h-screen bg-white">
      <Title />
      <View className="flex flex-row justify-around pt-3">
        <CardLine href={"/test"}>A</CardLine>
        <CardLine href={"/test"}>B</CardLine>
        <CardLine href={"/test"}>C</CardLine>
      </View>
    </View>
  );
}
