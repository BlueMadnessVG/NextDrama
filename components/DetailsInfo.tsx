import { icons } from "@/constants/icons";
import { Image, Pressable, Text, View } from "react-native";

interface DetailsInfoProps {
  title: string;
  year: number;
  poster_path: string;
  status: string;
  overview: string;
}

export default function DetailsInfo({
  title,
  year,
  poster_path,
  status,
  overview,
}: DetailsInfoProps) {
  console.log(year)
  return (
    <>
      <View>
        <Image
          source={{ uri: poster_path }}
          className="w-full h-[240px]"
          resizeMode="stretch"
        />
      </View>
      <View className="flex-col items-start justify-center mt-5 px-2">
        <Text className="text-text_main font-bold text-3xl">
          {title}
        </Text>
        <View className="flex-row items-center gap-x-2 mt-2">
          <Text className="text-text_din">{year}</Text>
          <Text className="text-text_din bg-bg_highlight py-1 px-2 rounded-lg">
            {status}
          </Text>
          <Text className="text-text_din">16+</Text>
        </View>
        <View className="flex-col w-full items-center justify-center mt-2 px-1">
          <Pressable className="bg-white w-full flex flex-row items-center justify-center py-3 gap-x-3 rounded-md">
            <Image source={icons.play} className="w-4 h-4" />
            <Text className="text-black text-lg font-bold"> Play </Text>
          </Pressable>
        </View>
        <Text className="text-text_main mt-2 text-justify px-1">
          {overview}
        </Text>
        <Text className="text-2xl text-text_main font-extrabold px-1 mt-4">
          Episodes
        </Text>
      </View>
    </>
  );
}
