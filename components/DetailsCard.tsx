import { Image, Text, TouchableOpacity, View } from "react-native";

interface MovieCardProps {
  title: string;
  time:string;
  imageSource: any;
}

export default function DetailsCard({ title, time, imageSource }: MovieCardProps) {
  return (
    <TouchableOpacity className="flex flex-row flex-1">
      <View className="w-36 h-20 mx-2 my-3">
        <Image className="w-full h-full" source={imageSource} />
      </View>

      <View className="flex justify-center px-2">
        <Text className="text-lg font-bold text-text_main">{title}</Text>
        <Text className="text-sm text-text_din">{time}</Text>
      </View>
    </TouchableOpacity>
  );
}
