import { icons } from "@/constants/icons";
import { router } from "expo-router";
import { Image, TouchableOpacity } from "react-native";

export default function ReturnButton() {
  return (
    <TouchableOpacity className="absolute top-14 left-2 items-center bg-primary p-2 rounded-full" onPress={router.back}>
      <Image source={icons.arrow} className="w-5 h-5 mt-0.5 rotate-180" />
    </TouchableOpacity>
  );
}
