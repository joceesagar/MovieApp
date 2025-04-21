import { Stack } from "expo-router";
import './globals.css'

export default function RootLayout() {
  //This is stack navigation for navigating between (tabs) and movie
  return <Stack>
    {/* 👇 This sets up the (tabs) folder as the main screen group using bottom tab navigation */}
    <Stack.Screen
      name="(tabs)"
      options={{ headerShown: false }}
    />

    {/* 👇 This adds another screen to the stack for movie detail pages (navigated from tabs) */}
    <Stack.Screen
      name="movie/[id]"
      options={{ headerShown: false }}
    />
  </Stack>;
}
