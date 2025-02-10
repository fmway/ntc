import ButtonLink from "@/components/ui/ButtonLink";
import CardLine from "@/components/ui/CardLine";
import Title from "@/components/ui/Title";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View className="w-screen min-h-screen bg-white">
      <View className="w-screen flex flex-row justify-between items-center px-4 pt-3">
        <Title />
        <ButtonLink
          className="bg-secondary rounded-lg flex justify-center items-center w-[175px] h-[50px]"
          href={"/login"}
        >
          <Text className="text-white font-[PoppinsSemiBold] text-[12px]">
            Login as Admin
          </Text>
        </ButtonLink>
      </View>
      <View className="flex flex-row justify-around pt-3">
        <CardLine href={"/test"}>A</CardLine>
        <CardLine href={"/test"}>B</CardLine>
        <CardLine href={"/test"}>C</CardLine>
        <CardLine href={"/test"}>D</CardLine>
      </View>
    </View>
  );
}
