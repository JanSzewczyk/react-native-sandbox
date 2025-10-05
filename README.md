<div align="center">

# 📱✨ React Native Sandbox

[![GitHub Stars](https://img.shields.io/github/stars/JanSzewczyk/react-native-sandbox?style=flat-square)](https://github.com/JanSzewczyk/react-native-sandbox/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![React Native](https://img.shields.io/badge/React%20Native-0.81-blue?style=flat-square&logo=react)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-SDK%2054-black?style=flat-square&logo=expo)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![NativeWind](https://img.shields.io/badge/NativeWind-4.2-purple?style=flat-square)](https://www.nativewind.dev/)

**An experimental playground for exploring advanced React Native animations, gestures, and UI patterns — featuring Twitter-style scrolling, LinkedIn tabs, and modern mobile interactions! 🚀📱**

[✨ Features](#-features) • [🎯 Getting Started](#-getting-started) • [📖 Table of Contents](#-table-of-contents) • [⚡ Animations](#-animations) • [🎨 Styling](#-styling-with-nativewind)

</div>

---

## 👋 Welcome to React Native Sandbox!

Hey there, mobile developer! 🎉 Welcome to **React Native Sandbox** — your ultimate experimental playground for mastering advanced React Native animations, gestures, and real-world UI patterns!

### 🎯 What is React Native Sandbox?

React Native Sandbox is a comprehensive demonstration project showcasing production-ready implementations of popular mobile app interactions. From Twitter's smooth scrolling headers to LinkedIn's elegant tab layouts, this sandbox serves as both a learning resource and a component library for modern React Native development.

### 💡 The Problem It Solves

Building sophisticated mobile UI experiences requires:
- **Complex Animations** — Smooth, native-feeling 60 FPS animations
- **Advanced Gestures** — Natural touch interactions and swipe gestures
- **Real-World Patterns** — Implementations of popular app UIs (Twitter, LinkedIn)
- **Performance Optimization** — Running animations on the UI thread
- **Type Safety** — Full TypeScript support across the codebase
- **Modern Tooling** — Latest Expo SDK with file-based routing

### ✅ The Solution

React Native Sandbox provides:
- 🎬 **Animation Demos** — Reanimated-powered smooth animations
- 📱 **Real UI Patterns** — Twitter scroll, LinkedIn tabs, bottom sheets
- 🧪 **Experimentation Space** — Perfect for testing new ideas
- 🔒 **Type-Safe** — Full TypeScript + Zod runtime validation
- ⚡ **Best Practices** — Modern React Native architecture with Expo Router
- 🛠️ **Developer Experience** — ESLint, Prettier, and optimized tooling

### 🌟 What Makes It Special?

- **Production-Ready Components** — Real-world inspired implementations
- **Reanimated 4.1** — Butter-smooth 60 FPS animations on native thread
- **Expo Router 6** — File-based routing with type-safe navigation
- **NativeWind 4.2** — Tailwind CSS for React Native styling
- **T3 Env + Zod** — Type-safe environment variables with runtime validation
- **Cross-Platform** — Works on iOS, Android, and Web
- **Modern Stack** — React 19, TypeScript 5.9, Expo SDK 54

---

## ✨ Features

### 🎬 Animation Demos

- **Twitter Scroll** — Animated header that expands/collapses on scroll
- **LinkedIn Tabs** — Custom tab layout with animated icons and smooth transitions
- **Bottom Sheet** — Interactive draggable bottom sheet component
- **Animated Header** — Various header animation patterns
- **Top Navigation** — Hourly data tabs with dynamic content rendering

### 🚀 Core Technologies

- **React Native 0.81** with **React 19** — Latest stable versions
- **Expo SDK 54** — Managed workflow with EAS Build support
- **TypeScript 5.9** — Full type safety across the entire codebase
- **Metro Bundler** — Optimized for fast refresh and bundling

### 🧭 Navigation & Routing

- **Expo Router 6** — File-based routing with deep linking support
- **React Navigation 7** — Native stack and bottom tabs navigation
- **Type-safe routing** — Fully typed navigation params

### 🎨 Styling

- **NativeWind 4.2.1** — Tailwind CSS for React Native
- **Tailwind CSS 3.4** — Utility-first CSS framework
- **Expo Blur** — Native blur effects
- **Expo Image** — Optimized image component
- **Vector Icons** — Comprehensive icon library

### ⚡ Animations & Gestures

- **Reanimated 4.1** — 60 FPS native animations running on UI thread
- **Gesture Handler** — Native touch handling with smooth interactions
- **React Native Worklets** — Run JavaScript on UI thread for performance

### 🔒 Type Safety & Validation

- **TypeScript** — Static type checking with strict mode
- **Zod 4.1** — Runtime schema validation for data integrity
- **T3 Env** — Type-safe environment variables with build-time checks

### 🧹 Code Quality

- **ESLint 9** — Code quality and consistency enforcement
- **Prettier** — Code formatting with [@szum-tech/prettier-config](https://www.npmjs.com/package/@szum-tech/prettier-config)
- **Fast Refresh** — Instant feedback during development
- **Expo DevTools** — Powerful debugging tools

### 📱 Platform Support

- ✅ **iOS** — Native iOS apps (iPhone & iPad)
- ✅ **Android** — Native Android apps (phones & tablets)
- ✅ **Web** — React Native Web support

---

## 📖 Table of Contents

- [Features](#-features)
- [Getting Started](#-getting-started)
  - [Prerequisites](#-prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [Tech Stack](#️-tech-stack)
- [Styling with NativeWind](#-styling-with-nativewind)
- [Animations](#-animations)
- [Navigation](#-navigation)
- [Type Safety and Validation](#-type-safety-and-validation)
- [Code Quality](#-code-quality)
- [Building for Production](#-building-for-production)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)
- [Contact](#-contact)

---

## 🎯 Getting Started

### 📋 Prerequisites

Before you begin, ensure you have the following installed:

| Requirement | Version | Description |
|------------|---------|-------------|
| **Node.js** | 18.x or higher | JavaScript runtime environment |
| **npm/yarn/pnpm** | Latest | Package manager of your choice |
| **Git** | Latest | Version control system |
| **Expo CLI** | Latest | Expo command-line tools |

#### Platform-Specific Requirements

<details>
<summary><b>🍎 iOS Development (macOS only)</b></summary>

- **Xcode 14+** — [Download from App Store](https://apps.apple.com/us/app/xcode/id497799835)
- **iOS Simulator** — Included with Xcode
- **CocoaPods** — Installed automatically by Expo

</details>

<details>
<summary><b>🤖 Android Development</b></summary>

- **Android Studio** — [Download](https://developer.android.com/studio)
- **Android SDK** — API 33+ required
- **Android Emulator** — Or physical device with USB debugging

</details>

<details>
<summary><b>🌐 Web Development</b></summary>

- Any modern web browser (Chrome, Firefox, Safari, Edge)

</details>

### Installation

Follow these steps to get your development environment running:

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/JanSzewczyk/react-native-sandbox.git
cd react-native-sandbox
```

#### 2️⃣ Install Dependencies

```bash
npm install
```

Or use your preferred package manager:

```bash
# Using yarn
yarn install

# Using pnpm
pnpm install
```

#### 3️⃣ Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` and configure your variables:

```env
EXPO_PUBLIC_FEATURE_FLAG_X=true
# Add other variables as needed
```

See [Environment Variables](#-environment-variables) section for details.

### Running the App

#### Start the Development Server

```bash
npm run start
```

This will start the Expo development server and show a QR code.

#### Run on iOS Simulator (macOS only)

```bash
npm run ios
```

Or press `i` in the terminal after starting the dev server.

#### Run on Android Emulator

```bash
npm run android
```

Or press `a` in the terminal after starting the dev server.

#### Run in Web Browser

```bash
npm run web
```

Or press `w` in the terminal after starting the dev server.

#### Run on Physical Device

1. Install **Expo Go** app on your device:
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. Scan the QR code shown in the terminal

3. The app will open in Expo Go

💡 **Tip:** For faster development and access to custom native modules, use `npm run ios` or `npm run android` to build a development build instead of using Expo Go.

---

## 🔐 Environment Variables

This project uses [T3 Env](https://env.t3.gg/) for type-safe environment variable management with runtime validation using Zod.

### Configuration Location

Environment validation is configured in `src/data/env.ts`:

```typescript
import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  // Only variables with this prefix are allowed on the client
  clientPrefix: "EXPO_PUBLIC_",
  
  // Define and validate your client-side environment variables
  client: {
    EXPO_PUBLIC_API_URL: z.string().url(),
    EXPO_PUBLIC_FEATURE_FLAG_X: z
      .enum(["true", "false"])
      .transform((value) => value === "true"),
  },
  
  // Map process.env variables to your schema
  runtimeEnv: {
    EXPO_PUBLIC_API_URL: process.env.EXPO_PUBLIC_API_URL,
    EXPO_PUBLIC_FEATURE_FLAG_X: process.env.EXPO_PUBLIC_FEATURE_FLAG_X,
  },
  
  // Treat empty strings as undefined
  emptyStringAsUndefined: true,
});
```

### Environment Variables Template

Create a `.env.local` file in the root directory:

```env
# ==============================================
# CLIENT-SIDE VARIABLES (exposed to app)
# Must be prefixed with EXPO_PUBLIC_
# ==============================================

# API Configuration
EXPO_PUBLIC_API_URL=https://api.example.com

# Feature Flags
EXPO_PUBLIC_FEATURE_FLAG_X=true
EXPO_PUBLIC_ENABLE_ANIMATIONS=true

# Analytics (optional)
EXPO_PUBLIC_ANALYTICS_ID=your_analytics_id

# ==============================================
# ADD YOUR VARIABLES HERE
# ==============================================
```

### Important Notes

⚠️ **Expo requires public environment variables to be prefixed with `EXPO_PUBLIC_`**

- ✅ `EXPO_PUBLIC_API_URL` — Will be available in the app
- ❌ `API_URL` — Will NOT be available in the app

🔒 **Never commit `.env.local` or files containing secrets!**

Only commit `.env.example` with placeholder values.

### Benefits of T3 Env

- ✅ **Type Safety** — Full TypeScript autocomplete for `env.EXPO_PUBLIC_*`
- ✅ **Runtime Validation** — Validates variables at app startup using Zod schemas
- ✅ **Build-Time Checks** — Fails fast if required variables are missing
- ✅ **Transform Values** — Convert strings to booleans, numbers, or custom types
- ✅ **Single Source of Truth** — One place to define all environment variables

### Using Environment Variables

```typescript
import { env } from "~/data/env";

// Type-safe access with autocomplete
const apiUrl = env.EXPO_PUBLIC_API_URL; // string
const isFeatureEnabled = env.EXPO_PUBLIC_FEATURE_FLAG_X; // boolean
```

### Adding New Variables

1. **Add to `.env.local`:**
   ```env
   EXPO_PUBLIC_NEW_VARIABLE=value
   ```

2. **Define validation in `src/data/env.ts`:**
   ```typescript
   client: {
     EXPO_PUBLIC_NEW_VARIABLE: z.string().min(1)
   }
   
   runtimeEnv: {
     EXPO_PUBLIC_NEW_VARIABLE: process.env.EXPO_PUBLIC_NEW_VARIABLE
   }
   ```

3. **Use in your app:**
   ```typescript
   import { env } from "~/data/env";
   console.log(env.EXPO_PUBLIC_NEW_VARIABLE);
   ```

---

## 📃 Available Scripts

### 🚀 Development

| Command | Description |
|---------|-------------|
| `npm run start` | Start Expo development server |
| `npm run ios` | Run on iOS simulator (macOS only) |
| `npm run android` | Run on Android emulator/device |
| `npm run web` | Run in web browser |

### 🧹 Code Quality

| Command | Description |
|---------|-------------|
| `npm run lint` | Run ESLint to check code quality |
| `npm run prettier:check` | Check code formatting with Prettier |
| `npm run prettier:write` | Format code with Prettier |

### 📦 Build & Deployment

| Command | Description |
|---------|-------------|
| `npm run sync-versions` | Sync package versions from package.json to README |

### 🔍 Development Workflow

Recommended workflow before committing:

```bash
# Check code quality
npm run lint

# Fix formatting
npm run prettier:write

# Test on your target platform
npm run ios    # or android, or web
```

---

## 📁 Project Structure

```
react-native-sandbox/
│
├── 📁 app/                         # Expo Router file-based routes
│   ├── 📁 linkedin-tabs/           # LinkedIn-style tab navigation demo
│   │   ├── _layout.tsx
│   │   └── index.tsx
│   │
│   ├── 📁 top-navs/                # Top navigation with hourly tabs
│   │   ├── _layout.tsx             # Tab navigation layout
│   │   ├── index.tsx               # First tab (hourly data)
│   │   ├── two.tsx                 # Second tab
│   │   ├── three.tsx               # Third tab
│   │   └── four.tsx                # Fourth tab
│   │
│   ├── _layout.tsx                 # Root layout with navigation
│   ├── index.tsx                   # Home screen with demo links
│   ├── twitter-scroll.tsx          # Twitter-style scrolling header
│   ├── bottom-sheet.tsx            # Bottom sheet interaction demo
│   ├── animated-header.tsx         # Animated header patterns
│   └── global.css                  # Global Tailwind styles
│
├── 📁 components/                  # Reusable UI components
│   ├── 📁 ui/                      # Base UI components
│   └── 📁 animations/              # Animation components
│
├── 📁 data/                        # Data models and configuration
│   ├── env.ts                      # Environment variable validation
│   └── mock-data.ts                # Mock data for demos
│
├── 📁 assets/                      # Static assets
│   ├── images/                     # Image files
│   └── fonts/                      # Custom fonts
│
├── 📁 src/                         # Source code (if using src directory)
│
├── 📄 .env.example                 # Environment variables template
├── 📄 .env.local                   # Local environment (gitignored)
├── 📄 app.config.ts                # Expo app configuration
├── 📄 babel.config.js              # Babel configuration
├── 📄 eslint.config.cjs            # ESLint configuration
├── 📄 metro.config.cjs             # Metro bundler configuration
├── 📄 prettier.config.mjs          # Prettier configuration
├── 📄 tailwind.config.ts           # Tailwind CSS configuration
├── 📄 tsconfig.json                # TypeScript configuration
└── 📄 package.json                 # Dependencies and scripts
```

### 📂 Directory Descriptions

#### Core Directories

- **`app/`** — File-based routing with Expo Router. Each file becomes a screen/route
- **`app/linkedin-tabs/`** — LinkedIn-inspired custom tab layout implementation
- **`app/top-navs/`** — Top navigation tabs with dynamic hourly content
- **`components/`** — Reusable React Native components for UI
- **`data/`** — Mock data, schemas, and environment configuration
- **`assets/`** — Images, fonts, and other static resources

#### Configuration Files

- **`app.config.ts`** — Expo app configuration (name, version, bundle IDs, platform settings)
- **`babel.config.js`** — Babel transpiler configuration (**Reanimated plugin must be last!**)
- **`eslint.config.cjs`** — ESLint 9 code quality rules and linting standards
- **`metro.config.cjs`** — Metro bundler configuration for JavaScript transformation
- **`prettier.config.mjs`** — Prettier code formatting with @szum-tech/prettier-config
- **`tailwind.config.ts`** — Tailwind CSS customization (colors, spacing, fonts, etc.)
- **`tsconfig.json`** — TypeScript compiler options, strict mode, and path aliases

---

## 🛠️ Tech Stack

### 🎯 Core Framework

- **[React Native 0.81](https://reactnative.dev/)** — Cross-platform mobile framework
- **[React 19](https://react.dev/)** — Latest React with concurrent features
- **[Expo SDK 54](https://expo.dev/)** — Development platform with managed workflow
- **[TypeScript 5.9](https://www.typescriptlang.org/)** — Type-safe JavaScript with strict mode
- **[Metro Bundler](https://facebook.github.io/metro/)** — Fast JavaScript bundler

### 🧭 Navigation

- **[Expo Router 6](https://docs.expo.dev/router/introduction/)** — File-based routing with deep linking
- **[React Navigation 7](https://reactnavigation.org/)** — Navigation primitives for native stack and tabs

### 🎨 Styling

- **[NativeWind 4.2.1](https://www.nativewind.dev/)** — Tailwind CSS for React Native
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** — Utility-first CSS framework
- **[Expo Blur](https://docs.expo.dev/versions/latest/sdk/blur-view/)** — Native blur effects
- **[Expo Image](https://docs.expo.dev/versions/latest/sdk/image/)** — Optimized image component
- **[@expo/vector-icons](https://icons.expo.fyi/)** — Comprehensive icon library

### ⚡ Animations & Gestures

- **[React Native Reanimated 4.1](https://docs.swmansion.com/react-native-reanimated/)** — Smooth 60 FPS animations on UI thread
- **[React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)** — Native touch and gesture handling
- **[React Native Worklets](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary/#worklet)** — Run JavaScript on UI thread

### 🔒 Type Safety & Validation

- **[TypeScript](https://www.typescriptlang.org/)** — Static type checking
- **[Zod 4.1](https://zod.dev/)** — Runtime schema validation
- **[T3 Env](https://env.t3.gg/)** — Type-safe environment variables

### 🧹 Code Quality

- **[ESLint 9](https://eslint.org/)** — JavaScript/TypeScript linting
- **[Prettier](https://prettier.io/)** — Code formatting
- **[@szum-tech/prettier-config](https://www.npmjs.com/package/@szum-tech/prettier-config)** — Shared Prettier configuration

### 📦 Expo Modules

- **expo-blur** — Native blur effects
- **expo-font** — Custom font loading
- **expo-haptics** — Haptic feedback
- **expo-image** — Optimized image component
- **expo-linking** — Deep linking support
- **expo-status-bar** — Status bar control
- **expo-system-ui** — System UI customization
- **expo-web-browser** — In-app browser

---

## 🎨 Styling with NativeWind

This project uses **NativeWind 4.2**, which brings Tailwind CSS to React Native with full TypeScript support.

### Basic Usage

```typescript
import { View, Text } from 'react-native';

export default function MyComponent() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-blue-500">
        Hello NativeWind! 🎨
      </Text>
    </View>
  );
}
```

### Customizing Tailwind

Customize your design system in `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#your-custom-color',
        secondary: '#another-color',
      },
      spacing: {
        '128': '32rem',
      },
      fontFamily: {
        custom: ['CustomFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
```

### Global Styles

Global CSS is imported in `app/global.css` and loaded in the root layout (`app/_layout.tsx`):

```css
/* app/global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom global styles */
.my-custom-class {
  /* Your custom CSS */
}
```

### IDE Support

For VSCode, install the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension for:
- ✅ Autocomplete for class names
- ✅ Syntax highlighting
- ✅ Linting and validation
- ✅ Hover previews

---

## ⚡ Animations

This project uses **Reanimated 4.1** for butter-smooth, 60 FPS animations that run on the native thread.

### Basic Animation Example

```typescript
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { Pressable } from 'react-native';

export default function AnimatedBox() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  return (
    <Pressable
      onPress={() => {
        offset.value = withSpring(offset.value + 50);
      }}
    >
      <Animated.View 
        style={[styles.box, animatedStyles]}
        className="w-20 h-20 bg-blue-500 rounded-lg"
      />
    </Pressable>
  );
}
```

### Animation Demos in This Project

1. **Twitter Scroll** — Header that expands/collapses based on scroll position
2. **LinkedIn Tabs** — Animated tab indicators with smooth transitions
3. **Bottom Sheet** — Gesture-driven draggable sheet
4. **Animated Header** — Various header animation patterns

### Important: Babel Plugin Configuration

Reanimated requires a Babel plugin that **must be the last plugin** in your `babel.config.js`:

```javascript
module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    // ... other plugins
    'react-native-reanimated/plugin', // ⚠️ Must be last!
  ],
};
```

### Troubleshooting Animations

If animations aren't working:

```bash
# Clear Metro cache
npx expo start -c
```

---

## 🧭 Navigation

This project uses **Expo Router 6** for file-based routing with deep linking and type-safe navigation.

### File-Based Routing Structure

```
app/
├── _layout.tsx          # Root layout (/)
├── index.tsx            # Home screen (/)
├── about.tsx            # About screen (/about)
└── profile/
    ├── _layout.tsx      # Profile layout
    ├── [id].tsx         # Dynamic route (/profile/:id)
    └── settings.tsx     # Settings (/profile/settings)
```

### Navigation Examples

```typescript
import { Link, router } from 'expo-router';

// Using Link component (declarative)
<Link href="/about">Go to About</Link>

// Using router imperatively
router.push('/profile/123');
router.back();
router.replace('/home');

// With params
router.push({
  pathname: '/profile/[id]',
  params: { id: '123' }
});
```

### Type-Safe Navigation

Expo Router provides full TypeScript support with autocomplete for all routes:

```typescript
// Type-safe route params
import { useLocalSearchParams } from 'expo-router';

export default function ProfileScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  return <Text>Profile ID: {id}</Text>;
}
```

---

## 🔒 Type Safety and Validation

### TypeScript Configuration

Full TypeScript support with strict mode enabled in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "node",
    "resolveJsonModule": true
  }
}
```

**Benefits:**
- ✅ Static type checking at compile time
- ✅ IntelliSense and autocomplete in your IDE
- ✅ Catch errors before runtime
- ✅ Better refactoring support

### Runtime Validation with Zod

Use Zod for runtime validation of:
- API responses
- Environment variables
- User input
- External data

```typescript
import { z } from 'zod';

// Define schema
const UserSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().positive(),
});

// Validate and parse
const user = UserSchema.parse(apiResponse);

// Type inference
type User = z.infer<typeof UserSchema>;
```

---

## 🧹 Code Quality

### ESLint

ESLint 9 is configured with Expo's recommended rules:

```bash
# Check code quality
npm run lint
```

Configuration in `eslint.config.cjs` includes:
- TypeScript support
- React Native rules
- Expo-specific rules
- Import sorting

### Prettier

Prettier is configured with [@szum-tech/prettier-config](https://www.npmjs.com/package/@szum-tech/prettier-config):

```bash
# Check formatting
npm run prettier:check

# Auto-fix formatting
npm run prettier:write
```

### Pre-Commit Workflow

Before committing, run:

```bash
npm run lint && npm run prettier:write
```

---

## 🚀 Building for Production

### Using Expo Application Services (EAS)

[EAS Build](https://docs.expo.dev/eas/) provides cloud-based builds for iOS and Android.

#### 1️⃣ Install EAS CLI

```bash
npm install -g eas-cli
```

#### 2️⃣ Login to Expo

```bash
eas login
```

#### 3️⃣ Configure Your Project

```bash
eas init
```

This creates `eas.json`. Customize build profiles as needed.

#### 4️⃣ Build for Platforms

```bash
# iOS build
eas build --platform ios --profile production

# Android build
eas build --platform android --profile production

# Both platforms
eas build --platform all --profile production
```

#### 5️⃣ Submit to Stores

```bash
# Submit to App Store
eas submit --platform ios

# Submit to Google Play
eas submit --platform android
```

### Local/Bare Workflow Builds

For local builds or bare workflow:

```bash
# Generate native projects
npx expo prebuild

# Build iOS (requires macOS)
cd ios && xcodebuild ...

# Build Android
cd android && ./gradlew assembleRelease
```

### Web Deployment

For web platform:

```bash
# Export web build
npx expo export:web
```

Deploy the `web-build` folder to:
- **Vercel**: `vercel web-build`
- **Netlify**: `netlify deploy --dir=web-build`
- **GitHub Pages**: Push to gh-pages branch

---

## 🔧 Troubleshooting

### Common Issues and Solutions

<details>
<summary><b>❌ Animations don't work or Reanimated errors</b></summary>

**Solution:** Ensure the Reanimated plugin is the **last plugin** in `babel.config.js`:

```javascript
module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    // other plugins...
    'react-native-reanimated/plugin', // Must be last!
  ],
};
```

Then clear cache:
```bash
npx expo start -c
```

</details>

<details>
<summary><b>❌ iOS build fails after adding native dependencies</b></summary>

**Solution:** Reinstall iOS pods:

```bash
cd ios
pod install
cd ..
npm run ios
```

</details>

<details>
<summary><b>❌ App shows old code or strange errors</b></summary>

**Solution:** Clear all caches:

```bash
# Clear Expo cache
npx expo start -c

# Clear npm cache (if needed)
npm cache clean --force

# Clear watchman (if installed)
watchman watch-del-all
```

</details>

<details>
<summary><b>❌ Android Gradle build errors</b></summary>

**Solution:** Clean and rebuild:

```bash
cd android
./gradlew clean
cd ..
npm run android
```

</details>

<details>
<summary><b>❌ Environment variables are undefined</b></summary>

**Solution:**
- Ensure variables are prefixed with `EXPO_PUBLIC_`
- Restart the dev server after changing `.env` files
- Check validation in `src/data/env.ts`
- Verify `.env.local` file exists

</details>

### Expo Diagnostics

Run Expo's built-in diagnostics:

```bash
npx expo doctor
```

This checks for:
- Node.js version compatibility
- Package version mismatches
- Configuration issues
- Common problems

### Getting Help

- 📖 Check [Expo Documentation](https://docs.expo.dev/)
- 💬 Search [Expo Forums](https://forums.expo.dev/)
- 🐛 Open an issue on [GitHub](https://github.com/JanSzewczyk/react-native-sandbox/issues)
- 📚 React Native [Documentation](https://reactnative.dev/docs/getting-started)

---

## 🖼️ Screenshots

### 📱 Demo Screens

> [TODO: Add screenshots of animation demos]

**Available Demos:**
- Twitter-style scrolling header
- LinkedIn custom tabs
- Bottom sheet interactions
- Animated navigation patterns
- Top navigation with hourly data

---

## 🤝 Contributing

Contributions are welcome! 🎉 Help make this sandbox even better!

### How to Contribute

1️⃣ **Fork the repository**

2️⃣ **Create a feature branch**
```bash
git checkout -b feature/new-animation-demo
```

3️⃣ **Make your changes**
- Add new animation demos
- Improve existing patterns
- Fix bugs
- Update documentation

4️⃣ **Commit using Conventional Commits**

```bash
# Format: <type>(<scope>): <subject>

git commit -m "feat: add bottom sheet animation demo"
git commit -m "fix: resolve gesture handler conflict"
git commit -m "docs: update animation examples"
```

**Commit Types:**
- `feat:` — New feature or demo
- `fix:` — Bug fix
- `docs:` — Documentation changes
- `style:` — Code style changes (formatting)
- `refactor:` — Code refactoring
- `perf:` — Performance improvements
- `test:` — Adding or updating tests
- `chore:` — Maintenance tasks

5️⃣ **Push to your branch**
```bash
git push origin feature/new-animation-demo
```

6️⃣ **Open a Pull Request**
- Provide clear description
- Add demo video/GIF if UI changes
- Reference any related issues
- Ensure all checks pass

### Contribution Guidelines

- ✅ Follow TypeScript best practices
- ✅ Use Expo and React Native conventions
- ✅ Add comments for complex animations
- ✅ Test on iOS and Android
- ✅ Follow the existing code style
- ✅ Update documentation

---

## 📜 License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this software with proper attribution.

---

## 🙏 Acknowledgments

Built with amazing tools from the React Native ecosystem:

### 🛠️ Core Technologies

- **[Expo Team](https://expo.dev/)** — For the incredible development platform
- **[Software Mansion](https://swmansion.com/)** — For Reanimated and Gesture Handler
- **[NativeWind Team](https://www.nativewind.dev/)** — For Tailwind CSS in React Native
- **[Vercel](https://vercel.com/)** — For React and design inspiration

### 🎨 Design & UI

- **[React Native Community](https://reactnative.dev/)** — For the amazing framework
- **[Tailwind CSS](https://tailwindcss.com/)** — For the utility-first approach

### 🤖 Development Tools

- **[TypeScript](https://www.typescriptlang.org/)** — For type safety
- **[Zod](https://zod.dev/)** — For runtime validation
- **[T3 Env](https://env.t3.gg/)** — For environment management

### 🌟 Community

- The entire React Native community for inspiration
- All open-source contributors
- Developers sharing animation patterns

---

## 📧 Contact

This project is created and maintained by **Jan Szewczyk**, a passionate React Native developer exploring modern mobile development patterns.

- **GitHub**: [@JanSzewczyk](https://github.com/JanSzewczyk)
- **Project Repository**: [github.com/JanSzewczyk/react-native-sandbox](https://github.com/JanSzewczyk/react-native-sandbox)

### Support

Found a bug or have a feature request? Please open an issue on GitHub:

[🐛 Report an Issue](https://github.com/JanSzewczyk/react-native-sandbox/issues)

---

<div align="center">

**Made with ❤️ by [Jan Szewczyk](https://github.com/JanSzewczyk)**

If this sandbox helped you, please consider giving it a ⭐ on GitHub!

[⬆ Back to Top](#-react-native-sandbox)

</div>