import { Link } from "expo-router";
import { Image, TouchableOpacity } from "react-native";

interface MovieCardProps {
  id: number;
  title: string;
  imageSource: any;
}

export default function MovieCard({ id, title, imageSource }: MovieCardProps) {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-32 h-44 mx-2 my-3 rounded-lg overflow-hidden">
        <Image className="w-full h-full" source={{ uri: imageSource }} />
      </TouchableOpacity>
    </Link>
  );
}
