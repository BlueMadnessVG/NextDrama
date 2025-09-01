import { Link } from "expo-router";
import { Image, TouchableOpacity } from "react-native";

interface MovieCardProps {
  title: string;
  imageSource: any;
}

export default function MovieCard({ title, imageSource }: MovieCardProps) {
  return (
    <Link href={`/movies/${title}`} asChild>
      <TouchableOpacity className="w-32 h-44 mx-2 my-3">
        <Image className="w-full h-full" source={imageSource} />
      </TouchableOpacity>
    </Link>
  );
}
