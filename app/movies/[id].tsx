import DetailsCard from "@/components/DetailsCard";
import DetailsInfo from "@/components/DetailsInfo";
import ReturnButton from "@/components/ReturnButton";
import { useGetSeriesDetails } from "@/hooks/useGetSeriesDetails";
import { useLocalSearchParams } from "expo-router";
import { FlatList, View } from "react-native";

/**
 * `MovieDetails` is a **detail screen** component that displays information
 * about a selected movie/show and a list of related episodes (or additional movies).
 *
 * The layout combines a `FlatList` with a **header section** for movie details
 * and individual `DetailsCard` components for each episode/item.
 *
 * ## Layout
 *
 * - **Root Container (`View`)**
 *   - Full screen (`flex-1`)
 *   - Dark background (`bg-bg_main`).
 *
 * - **FlatList**
 *   - **data**: `Movies` (static array of episode-like items).
 *   - **keyExtractor**: Uses `id`.
 *   - **ListHeaderComponent**:
 *     - **Cover Image** (`Image`)
 *       - Displays main movie/show image (`images.details`).
 *       - Height: `240px`, stretched to full width.
 *     - **Details Section** (`View`)
 *       - **Title** (`Text`): `"Beyond the Bar"`.
 *       - **Metadata Row** (`View`):
 *         - Year (`2023`).
 *         - Rating badge (`TV-MA`).
 *         - Age restriction (`16+`).
 *       - **Play Button** (`Pressable`):
 *         - White background, row layout with play icon (`icons.play`) + text.
 *       - **Description** (`Text`): Short synopsis of the movie/show.
 *       - **Episodes Label** (`Text`): `"Episodes"` header above the list.
 *   - **renderItem**:
 *     - Renders each item in `Movies` using `DetailsCard`.
 *     - Props passed: `title`, `imageSource`, `time`.
 *   - **contentContainerStyle**: Adds bottom padding (`80px`).
 *
 * - **ReturnButton**
 *   - A floating/custom button to navigate back (imported separately).
 *
 * ## Static Data
 * - `Movies`: Mocked array of episodes, each containing:
 *   - `id` (string)
 *   - `title` (string)
 *   - `time` (string duration, e.g. `"1h 30m"`)
 *   - `imageSource` (`images.details` placeholder asset).
 *
 * ## Dependencies
 * - `DetailsCard`: Custom component to display episode/movie cards.
 * - `ReturnButton`: Custom navigation button.
 * - `icons` & `images`: Asset constants.
 * - `FlatList`, `Image`, `Pressable`, `Text`, `View` from `react-native`.
 *
 * @returns {JSX.Element} The movie detail screen UI with header information and a list of episodes.
 */

export default function MovieDetails() {
  const { id } = useLocalSearchParams();
  const { loading, data } = useGetSeriesDetails({
    id: typeof id === "string" ? id : Array.isArray(id) ? id[0] : "",
  });

  if (loading) {
    console.log("Loading...");
    return null;
  }

  if (!data) {
    console.log("No data found.");
    return null;
  }

  return (
    <View className="flex-1 bg-bg_main">
      <FlatList
        data={data.chapters}
        keyExtractor={(item) => String(item.id)}
        ListHeaderComponent={
          <DetailsInfo
            title={data.title}
            year={new Date(data.relase_date).getFullYear()}
            poster_path={data.poster_path}
            status={data.status}
            overview={data.overview}
          />
        }
        renderItem={({ item }) => (
          <DetailsCard
            title={item.title}
            imageSource={item.poster_path}
            time={Math.round(item.overall_time / 60)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
      <ReturnButton />
    </View>
  );
}
