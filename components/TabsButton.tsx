import { focusedIcons, icons, IconType } from "@/constants/icons";
import { Image, Text, View } from "react-native";

interface TabsButtonProps {
  focused: boolean;
  icon: IconType;
  label: string;
}

export default function TabsButton({ icon, label, focused }: TabsButtonProps) {
  return (
    <View className="flex w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center overflow-hidden">
      <Image
        source={focused ? focusedIcons[icon] : icons[icon]}
        className={focused ? "size-7" : "size-8"}
      />
      {focused && (
        <Text className={"text-sm font-bold text-primary"}>{label}</Text>
      )}
    </View>
  );
}
