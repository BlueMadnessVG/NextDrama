import { Link } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

interface TrendingProps {
  imageSource: any;
  title: string;
}

export default function Trending({ imageSource, title }: TrendingProps) {
  return (
    <Link href={`/movies/${title}`} asChild>
      <Pressable className="flex items-center justify-center m-10 h-[38rem] border border-bg_tertiary rounded-lg overflow-hidden">
        <Image source={imageSource} className="w-full h-full object-cover" />
        <View className="absolute bottom-0 left-0 right-0 p-2 pt-3 flex bg-black/60">
          <Text className="text-3xl font-bold text-white mb-2">{title}</Text>
          <View className="flex flex-row justify-between items-center mb-2">
            <Text className="bg-bg_highlight text-text_din p-1.5 rounded-l">
              Trending
            </Text>
            <Text className="bg-bg_highlight text-text_din font-bold p-1.5 rounded-lg ">
              Trending
            </Text>
            <Text className="bg-bg_highlight text-text_din font-bold p-1.5 rounded-lg ">
              Trending
            </Text>
            <Text className="bg-bg_highlight text-text_din font-bold p-1.5 rounded-lg ">
              Trending
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
