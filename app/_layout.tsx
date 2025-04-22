import { Stack } from "expo-router";
import './globals.css';
import { StatusBar } from 'react-native'; // Import the StatusBar component
import { useColorScheme } from 'nativewind'; // If you're using NativeWind for theming

export default function RootLayout() {
  const { colorScheme } = useColorScheme(); // Get the current color scheme if using NativeWind

  return (
    <>
      <StatusBar
        hidden={true}
      />
      <Stack>
        {/* 👇 This sets up the (tabs) folder as the main screen group using bottom tab navigation */}
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />

        {/* 👇 This adds another screen to the stack for movie detail pages (navigated from tabs) */}
        <Stack.Screen
          name="movies/[id]"
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  );
}