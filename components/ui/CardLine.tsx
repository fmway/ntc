import { Href, Link } from "expo-router";
import { PropsWithChildren } from "react";
import { Text, View } from "react-native";

export default function CardLine({ children, href }: PropsWithChildren & {
  href: Href,
}) {
  return (
    <Link href={href}>
      <View className="flex items-center h-[640px] w-[300px] bg-primary rounded-xl justify-center relative">
        <View className="flex items-center absolute top-24 justify-center h-[60px] w-[300px] rounded-lg bg-secondary">
          <Text className="text-white text-lg uppercase font-[Poppins]">
            Line
          </Text>
        </View>
        <Text className="font-[PoppinsSemiBold] text-white text-[100px]">
          {children}
        </Text>
      </View>
    </Link>
  );
}
