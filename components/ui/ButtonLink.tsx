import { Href, Link } from "expo-router";
import { Children, PropsWithChildren } from "react";
import { Text, View } from "react-native";

export default function ButtonLink({ href, className, children }: PropsWithChildren & {
  href: Href,
  className?: string,
}) {
  return (
    <Link href={href}>
      <View className={className}>
        {Children.count(children) === 1 && typeof Children.toArray(children).at(0) === 'string' ?
          <Text>{children}</Text>
        : children}
      </View>
    </Link>
  );
}
