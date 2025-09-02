import { GenderList as GenderListType } from "@/interfaces/interfaces";
import { FlatList, Text, View } from "react-native";
import MovieCard from "./MovieCard";

interface GenderListProps {
  Gender: GenderListType; 
}

export default function GenderList({ Gender }: GenderListProps) {
  return (
    <View className="flex-1 mt-2 mb-3">
      <Text className="text-2xl text-text_main font-extrabold px-2">
        {Gender.name}
      </Text>

      <FlatList
        data={Gender.series}
        horizontal={true}
        renderItem={({ item }) => (
          <MovieCard id={item.id} title={item.title} imageSource={item.poster_path} />
        )}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
