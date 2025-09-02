import GenderListView from "@/components/GenderListView";
import Trending from "@/components/Trending";
import { useGetFeaturedSeries } from "@/hooks/useGetFeaturedSeries";
import { ScrollView, View } from "react-native";

/**
 * `Index` is the **Home Screen** component of the app.
 *
 * It serves as the entry point for the "Home" tab defined in `_Layout`.
 * The screen is structured with a `ScrollView` to allow vertical scrolling
 * and displays trending content followed by a list of movies.
 *
 * ## Layout
 *
 * - **Root Container (`View`)**
 *   - Full-screen (`flex-1`)
 *   - Background color set via `bg-bg_main` (Tailwind class).
 *
 * - **ScrollView**
 *   - Vertical scroll enabled.
 *   - Scroll indicators hidden for a cleaner UI.
 *   - `contentContainerStyle` ensures:
 *     - Bottom padding (10px).
 *     - Minimum height equal to full screen (`minHeight: "100%"`).
 *
 * ## Children Components
 *
 * - **Trending**
 *   - Displays a highlighted trending item.
 *   - Props:
 *     - `imageSource`: `images.cover` (local asset reference).
 *     - `title`: `"PERSONA 5 ROYAL"`.
 *
 * - **MovieList**
 *   - Renders a list of movies (component handles its own fetching/rendering).
 *
 * ## Dependencies
 * - `View` and `ScrollView` from `react-native`.
 * - `Trending` (custom component for highlighting trending content).
 * - `MovieList` (custom component for displaying a list/grid of movies).
 * - `images` (asset import containing `cover` image).
 *
 * @returns {JSX.Element} The home screen UI with trending content and a movie list.
 */

export default function Index() {
  const { loading, data } = useGetFeaturedSeries();

  if (loading) {
    console.log("Loading...");
  } else {
    return (
      <View className="flex-1 bg-bg_main">
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10, minHeight: "100%" }}
        >
          <Trending featuredSeries={{ series: data[0] }} />


          <GenderListView />

        </ScrollView>
      </View>
    );
  }
}
