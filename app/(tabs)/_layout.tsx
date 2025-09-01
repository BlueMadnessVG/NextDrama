import TabsButton from "@/components/TabsButton";
import { Tabs } from "expo-router";

/**
 * `_Layout` is the root tab navigator component for the app.
 *
 * It defines a bottom tab bar with three main screens:
 * - **Home** (`index`)
 * - **Search** (`search`)
 * - **Profile** (`profile`)
 *
 * Each screen is represented as a tab with a custom `TabsButton` component
 * that handles the icon and label styling.
 *
 * ## Tab Configuration
 *
 * - **tabBarShowLabel**: Disabled to rely on custom `TabsButton` for labels.
 * - **tabBarItemStyle**: Makes each tab occupy full width/height and centers content.
 * - **tabBarStyle**: Dark background with border styling.
 *
 * ## Screens
 *
 * - **Home**
 *   Path: `index`
 *   Icon: `"home"`
 *   Label: `"Home"`
 *
 * - **Search**
 *   Path: `search`
 *   Icon: `"search"`
 *   Label: `"Search"`
 *
 * - **Profile**
 *   Path: `profile`
 *   Icon: `"user"`
 *   Label: `"Profile"`
 *
 * ## Dependencies
 * - `Tabs` and `Tabs.Screen` come from the navigation library (likely `expo-router` or `@react-navigation`).
 * - `TabsButton` is a custom component that handles the icon rendering and focus state.
 *
 * @returns {JSX.Element} A configured bottom tab navigator with three screens.
 */

export default function _Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#1E2329",
          borderWidth: 1,
          borderColor: "#1E2329",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabsButton focused={focused} icon="home" label="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabsButton focused={focused} icon="search" label="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabsButton focused={focused} icon="user" label="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
