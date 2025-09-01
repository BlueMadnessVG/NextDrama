import { images } from "@/constants/images";
import { FlatList, Text, View } from "react-native";
import MovieCard from "./MovieCard";

const Movies = [
  {
    id: "1",
    title: "Movie 1",
    imageSource: images.cover,
  },
  {
    id: "2",
    title: "Movie 2",
    imageSource: images.cover,
  },
  {
    id: "3",
    title: "Movie 3",
    imageSource: images.cover,
  },
  {
    id: "4",
    title: "Movie 4",
    imageSource: images.cover,
  },
];

export default function MovieList() {
  return (
    <View className="flex-1 mt-2 mb-3">
      <Text className="text-2xl text-text_main font-extrabold px-2">
        K-Drama
      </Text>

      <FlatList
        data={Movies}
        horizontal={true}
        renderItem={({ item }) => (
          <MovieCard title={item.title} imageSource={item.imageSource} />
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
