import { Image, Text, View } from "react-native";

export default function Title() {
  return (
    <View className="flex flex-row gap-2 items-center">
      <Image
        className="h-16 w-16"
        source={require("@/assets/images/react-logo.png")}
      />
      <View>
        <Text className="text-secondary text-3xl font-[PoppinsSemiBold]">
          PT. Nusa Toyotetsu
        </Text>
        <Text className="text-secondary text-xl font-[PoppinsSemiBold]">
          Die Maintenance Dept.
        </Text>
      </View>
    </View>
  );
}
