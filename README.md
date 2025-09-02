# NextDrama 🎬

A cross-platform drama/movie discovery app built with [Expo](https://expo.dev), [React Native](https://reactnative.dev), [expo-router](https://expo.github.io/router/docs/), and [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native).

## Features

- Browse trending dramas and movies
- View detailed info and episodes for each series
- Custom bottom tab navigation
- Responsive UI with Tailwind-like styling
- Fast navigation using expo-router
- Modular component structure

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the app**

   ```bash
   npx expo start
   ```

   You can open the app in:
   - [Expo Go](https://expo.dev/go)
   - Android emulator
   - iOS simulator
   - Web browser

## Project Structure

- **app/**  
  Main app screens and file-based routing.
- **components/**  
  Reusable UI components (e.g. TabsButton, Trending, DetailsCard).
- **constants/**  
  Asset and icon definitions.
- **tailwind.config.js**  
  Tailwind/NativeWind configuration.

## Styling

This project uses [NativeWind](https://www.nativewind.dev/) for Tailwind CSS utility classes in React Native.  
Make sure your `tailwind.config.js` includes both `app` and `components` folders:

```js
content: [
  "./app/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}"
]
```

## Development Tips

- Use file-based routing for screens in `app/`
- Keep components modular and reusable
- Avoid nesting FlatList inside ScrollView (see React Native docs)
- Use the custom tab bar for navigation

## Learn More

- [Expo documentation](https://docs.expo.dev/)
- [NativeWind documentation](https://www.nativewind.dev/)
- [expo-router documentation](https://expo.github.io/router/docs/)

## Community

- [Expo on GitHub](https://github.com/expo/expo)
- [NativeWind on GitHub](https://github.com/marklawlor/nativewind)
- [Expo Discord](https://chat.expo.dev)

---

Made with ❤️ for drama
