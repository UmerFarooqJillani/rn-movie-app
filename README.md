# Step by Step Project work Flow

## Reset your project
This command will move the existing files in app to app-example, then create a new app directory with a new index.tsx file.
```bash
npm run reset-project
```

### Installed these packages
```bash
npm install nativewind tailwindcss react-native-reanimated react-native-safe-area-context
```
1. `nativewind`
   - NativeWind brings Tailwind CSS syntax to React Native.

2. `tailwindcss`
   - This is the engine/configuration behind NativeWind.
      - Defines spacing (p-4)
      - Defines colors (bg-blue-500)
      - Defines typography (text-lg)
   - why ?
      - NativeWind depends on Tailwind rules.
      - Without tailwindcss, NativeWind has nothing to read from.
      - Think of it like:
         - `tailwindcss` → rulebook
         - `nativewind` → applies rules to React Native
3. `react-native-reanimated`
   - This is the official animation engine for React Native.
      - Expo Router uses it internally
      - Modern navigation relies on it
      - Advanced animations need it
4. `react-native-safe-area-context`
   - This handles safe areas on devices with:
      - Notches
      - Camera cutouts
      - Gesture bars
      - Status bars

## Setup Tailwind CSS
Run `npx tailwindcss init` to create a `tailwind.config.js` file

Add the paths to all of your component files in your `tailwind.config.js` file.
- Setup the tailwind: `https://www.nativewind.dev/docs`
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
--- 

Create a CSS file in `app` folder and add the Tailwind directives.
```css
/* global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
---

Add the **Babel preset** file globally
```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```
---

Create or modify your **metro.config.js**

Create a `metro.config.js` file in the root of your project if you don't already have one, then add the following configuration:
- if the file not exsist run this command `npx expo customize metro.config.js` or create manually
- And Update:
```js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
 
// module.exports = withNativeWind(config, { input: './global.css' })
module.exports = withNativeWind(config, { input: './app/global.css' })
```
---

Import your CSS file `app/_layout.tsx`
```tsx
import { Stack } from "expo-router";
import './global.css';

export default function RootLayout() {
  return <Stack />;
}
```
---

**TypeScript setup (optional)**

The simplest method to include the types is to create a new nativewind-env.d.ts file and add a triple-slash directive referencing the types.
```ts
/// <reference types="nativewind/types" />
```
---

Create a simple component to test your Nativewind setup
```tsx
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}
```
---