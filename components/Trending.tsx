import { FeaturedSeries } from "@/interfaces/interfaces";
import { Link } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

interface TrendingProps {
  featuredSeries: FeaturedSeries;
}

export default function Trending({ featuredSeries }: TrendingProps) {
  return (
    <Link href={`/movies/${featuredSeries.series.id}`} asChild>
      <Pressable className="flex items-center justify-center m-10 h-[38rem] border border-bg_tertiary rounded-lg overflow-hidden">
        <Image
          source={{ uri: featuredSeries.series.poster_path }}
          className="w-full h-full object-cover"
        />
        <View className="absolute bottom-0 left-0 right-0 p-2 pt-3 flex bg-black/60">
          <Text className="text-3xl font-bold text-white mb-2">
            {featuredSeries.series.title}
          </Text>
          <View className="flex flex-row justify-between items-center mb-2">
            {featuredSeries.series.genres.map((genre, index) => (
              <Text
                key={index}
                className="bg-bg_highlight text-text_din p-1.5 rounded-lg"
              >
                {String(genre)}
              </Text>
            ))}
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
