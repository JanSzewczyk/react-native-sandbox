<div align="center">

# 📱 React Native Szumplate

### Modern, production-ready React Native starter template

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Expo SDK](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/react-native-szumplate/expo??style=flat&logo=expo&label=Expo&color=000020)](https://expo.dev/)
[![React Native](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/react-native-szumplate/react-native?style=flat&logo=react&label=React+Native&color=61dafb)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/react-native-szumplate/dev/typescript?style=flat&logo=typescript&label=TypeScript&color=3178c6)](https://www.typescriptlang.org/)

[Getting Started](#-getting-started) • [Features](#-features) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## 👋 Hello there!

**React Native Szumplate** is a modern, production-ready starter template crafted by [Szum-Tech](https://github.com/JanSzewczyk) to help you build and ship high-quality iOS, Android, and web applications faster. It combines the best practices and most powerful tools in the React Native ecosystem—all configured and ready to use.

### Why Szumplate?

- **🚀 Production-Ready**: Pre-configured with industry best practices
- **⚡ Fast Development**: Hot reload, file-based routing, and excellent DX
- **🎨 Beautiful UI**: NativeWind (Tailwind CSS) for rapid styling
- **🔒 Type-Safe**: Full TypeScript + Zod runtime validation
- **📱 True Cross-Platform**: Single codebase for iOS, Android, and Web
- **🛠️ Developer Experience**: ESLint, Prettier, and modern tooling

## ✨ Features

### 🎯 Core Technologies
- **React Native 0.81** with **React 19** - Latest stable versions
- **Expo SDK 54** - Managed workflow with EAS Build support
- **TypeScript 5.9** - Full type safety across the entire codebase
- **Metro Bundler** - Optimized for fast refresh and bundling

### 🧭 Navigation & Routing
- **Expo Router 6** - File-based routing with deep linking support
- **React Navigation 7** - Native stack and bottom tabs navigation
- **Type-safe routing** - Fully typed navigation params

### 🎨 Styling & UI
- **NativeWind 4.2.1** - Tailwind CSS for React Native
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Expo Blur** - Native blur effects
- **Expo Image** - Optimized image component
- **Vector Icons** - Comprehensive icon library

### ⚡ Animations & Gestures
- **Reanimated 4.1** - 60 FPS native animations
- **Gesture Handler** - Native touch handling
- **React Native Worklets** - Run JavaScript on UI thread

### 🔒 Type Safety & Validation
- **TypeScript** - Static type checking
- **Zod 4.1** - Runtime schema validation
- **T3 Env** - Type-safe environment variables

### 🛠️ Developer Experience
- **ESLint 9** - Code quality and consistency
- **Prettier** - Code formatting with [@szum-tech/prettier-config](https://www.npmjs.com/package/@szum-tech/prettier-config)
- **Fast Refresh** - Instant feedback during development
- **Expo DevTools** - Powerful debugging tools

### 📱 Platform Support
- ✅ **iOS** - Native iOS apps
- ✅ **Android** - Native Android apps
- ✅ **Web** - React Native Web support

---

## 📖 Table of Contents

* [✨ Features](#-features)
* [📖 Table of Contents](#-table-of-contents)
* [📋 Prerequisites](#-prerequisites)
* [🎯 Getting Started](#-getting-started)
* [📁 Project Structure](#-project-structure)
* [📃 Available Scripts](#-available-scripts)
* [🔐 Environment Variables](#-environment-variables)
* [🎨 Styling with NativeWind](#-styling-with-nativewind)
* [⚡ Animations](#-animations)
* [🧭 Navigation](#-navigation)
* [🔒 Type Safety and Validation](#-type-safety-and-validation)
* [🧹 Code Quality](#-code-quality)
* [🚀 Building for Production](#-building-for-production)
* [📦 Updating Dependencies](#-updating-dependencies)
* [🔧 Troubleshooting](#-troubleshooting)
* [🛠️ Tech Stack](#-tech-stack)
* [🤝 Contributing](#-contributing)
* [📜 License](#-license)
* [🙏 Acknowledgments](#-acknowledgments)
* [📧 Support & Contact](#-support--contact)

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 22+ - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or your preferred package manager
- **Git** - [Download](https://git-scm.com/)

### Platform-Specific Requirements

#### For iOS Development (macOS only)
- **Xcode** 14+ - [Download from App Store](https://apps.apple.com/us/app/xcode/id497799835)
- **iOS Simulator** (included with Xcode)
- **CocoaPods** (installed automatically by Expo)

#### For Android Development
- **Android Studio** - [Download](https://developer.android.com/studio)
- **Android SDK** (API 33+)
- **Android Emulator** or physical device

#### For Web Development
- Any modern web browser (Chrome, Firefox, Safari, Edge)

---

## 🎯 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/JanSzewczyk/react-native-szumplate.git
cd react-native-szumplate
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Copy the example environment file and configure it:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your environment variables:

```bash
EXPO_PUBLIC_FEATURE_FLAG_X=your_value_here
```

### 4️⃣ Start the Development Server

```bash
npm run start
```

This will start the Expo development server and show a QR code.

### 5️⃣ Run on Your Target Platform

#### 📱 iOS (macOS only)

```bash
npm run ios
```

Or press `i` in the terminal after starting the dev server.

#### 🤖 Android

```bash
npm run android
```

Or press `a` in the terminal after starting the dev server.

#### 🌐 Web

```bash
npm run web
```

Or press `w` in the terminal after starting the dev server.

#### 📲 Physical Device

1. Install the **Expo Go** app on your device
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
2. Scan the QR code shown in the terminal
3. The app will open in Expo Go

> **Tip**: For faster development, use `npm run ios` or `npm run android` to build a development build instead of using Expo Go.

---

## 📁 Project Structure

```
react-native-szumplate/
├── src/
│   ├── app/                    # Expo Router file-based routes
│   │   ├── _layout.tsx         # Root layout with navigation
│   │   ├── index.tsx           # Home screen
│   │   └── global.css          # Global Tailwind styles
│   ├── components/             # Reusable UI components
│   ├── hooks/                  # Custom React hooks (ready for use)
│   ├── utils/                  # Utility functions (ready for use)
│   ├── data/                   # Data models and schemas
│   │   └── env.ts              # Environment variables validation
│   ├── server/                 # API/Server logic (ready for use)
│   └── tests/                  # Test files (ready for use)

├── assets/                     # Static assets (images, fonts)
├── scripts/                    # Build and utility scripts
├── .env.local                  # Local environment variables (gitignored)
├── .env.example                # Environment variables template
├── app.config.ts               # Expo app configuration
├── babel.config.js             # Babel configuration
├── eslint.config.cjs           # ESLint configuration
├── metro.config.cjs            # Metro bundler configuration
├── prettier.config.mjs         # Prettier configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies and scripts
```

### Key Directories

- **`src/app/`** - File-based routing with Expo Router. Each file becomes a route.
- **`src/components/`** - Reusable React Native components.
- **`src/hooks/`** - Custom React hooks for shared logic.
- **`src/utils/`** - Helper functions and utilities.
- **`src/data/`** - Data models, schemas, and environment validation.
- **`assets/`** - Images, fonts, and other static resources.

### Important Configuration Files

- **`app.config.ts`** - Expo app configuration (name, version, bundle IDs, platform settings)
- **`babel.config.js`** - Babel transpiler configuration (Reanimated plugin must be last!)
- **`eslint.config.cjs`** - ESLint 9 code quality rules and linting standards
- **`metro.config.cjs`** - Metro bundler configuration for JavaScript transformation
- **`prettier.config.mjs`** - Prettier code formatting with @szum-tech/prettier-config
- **`tailwind.config.ts`** - Tailwind CSS customization (colors, spacing, fonts, etc.)
- **`tsconfig.json`** - TypeScript compiler options, strict mode, and path aliases

---

## 📃 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run start` | Start the Expo development server |
| `npm run android` | Run the app on Android device/emulator |
| `npm run ios` | Run the app on iOS simulator (macOS only) |
| `npm run web` | Run the app in web browser |
| `npm run lint` | Run ESLint to check code quality |
| `npm run prettier:check` | Check code formatting with Prettier |
| `npm run prettier:write` | Format code with Prettier |
| `npm run sync-versions` | Sync package versions from package.json to README |

### Development Workflow

```bash
# Start development server
npm run start

# In another terminal, run platform-specific commands
npm run ios      # or android, or web

# Check code quality before committing
npm run lint
npm run prettier:check
```

---

## 🔐 Environment Variables

### Setup

1. Copy the example file:
```bash
cp .env.example .env.local
```

2. Add your environment variables:
```bash
# .env.local
EXPO_PUBLIC_FEATURE_FLAG_X=true
```

### Naming Convention

Expo requires public environment variables to be prefixed with `EXPO_PUBLIC_`:

```bash
EXPO_PUBLIC_API_URL=https://api.example.com
EXPO_PUBLIC_ENABLE_FEATURE_X=true
```

> **Important**: Never commit `.env.local` or any file containing secrets. Only commit `.env.example` with placeholder values.

### 💻 Environment Variables Handling

This template uses **T3 Env** with **Zod** for runtime validation of environment variables in `src/data/env.ts`.

#### Configuration

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
      .transform((value) => value === "true")
  },

  // Map process.env variables to your schema
  runtimeEnv: {
    EXPO_PUBLIC_API_URL: process.env.EXPO_PUBLIC_API_URL,
    EXPO_PUBLIC_FEATURE_FLAG_X: process.env.EXPO_PUBLIC_FEATURE_FLAG_X
  },

  // Treat empty strings as undefined
  emptyStringAsUndefined: true
});
```

#### Benefits

- ✅ **Type Safety** - Full TypeScript autocomplete for `env.EXPO_PUBLIC_*`
- ✅ **Runtime Validation** - Validates variables at app startup using Zod schemas
- ✅ **Build-Time Checks** - Fails fast if required variables are missing
- ✅ **Transform Values** - Convert strings to booleans, numbers, or custom types
- ✅ **Single Source of Truth** - One place to define all environment variables

#### Usage

```typescript
import { env } from "~/data/env";

// Type-safe access with autocomplete
const apiUrl = env.EXPO_PUBLIC_API_URL; // string
const isFeatureEnabled = env.EXPO_PUBLIC_FEATURE_FLAG_X; // boolean
```

#### Adding New Variables

1. Add to `.env.local`:
```bash
EXPO_PUBLIC_NEW_VARIABLE=value
```

2. Define validation in `src/data/env.ts`:
3.
```typescript
client: {
  EXPO_PUBLIC_NEW_VARIABLE: z.string().min(1)
}
runtimeEnv: {
  EXPO_PUBLIC_NEW_VARIABLE: process.env.EXPO_PUBLIC_NEW_VARIABLE
}
```

3. Use in your app:
4.
```typescript
import { env } from "~/data/env";

console.log(env.EXPO_PUBLIC_NEW_VARIABLE);
```

---

## 🎨 Styling with NativeWind

This template uses **NativeWind 4.2**, which brings Tailwind CSS to React Native.

### Usage

```tsx
import { View, Text } from 'react-native';

export default function MyComponent() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-blue-500">
        Hello NativeWind!
      </Text>
    </View>
  );
}
```

### Configuration

Tailwind configuration is in `tailwind.config.ts`. Customize colors, spacing, fonts, and more:

```typescript
// tailwind.config.ts
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
      },
    },
  },
};
```

### Global Styles

Global CSS is imported in `src/app/global.css` and loaded in the root layout (`src/app/_layout.tsx`).

### IDE Support

For VSCode, install the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension for autocomplete and syntax highlighting.

---

## ⚡ Animations

This template includes **Reanimated 4.1** for butter-smooth, 60 FPS animations that run on the native thread.

### Usage Example

```tsx
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring
} from 'react-native-reanimated';

export default function AnimatedBox() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  return (
    <Animated.View
      style={[styles.box, animatedStyles]}
      onPress={() => {
        offset.value = withSpring(offset.value + 50);
      }}
    />
  );
}
```

### Important: Babel Configuration

Reanimated requires a Babel plugin that **must be the last plugin** in your `babel.config.js`:

```javascript
module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    // ... other plugins
    'react-native-reanimated/plugin', // Must be last!
  ],
};
```

### Troubleshooting

If animations aren't working, clear the cache:
```bash
npx expo start -c
```

---

## 🧭 Navigation

This template uses **Expo Router 6** for file-based routing with deep linking support.

### File-Based Routing

```
src/app/
├── _layout.tsx          # Root layout
├── index.tsx            # Home screen (/)
├── about.tsx            # About screen (/about)
└── profile/
    ├── _layout.tsx      # Profile layout
    ├── [id].tsx         # Dynamic route (/profile/:id)
    └── settings.tsx     # Settings (/profile/settings)
```

### Navigation Example

```tsx
import { Link, router } from 'expo-router';

// Using Link component
<Link href="/about">Go to About</Link>

// Using router imperatively
router.push('/profile/123');
router.back();
```

### Type-Safe Routes

Expo Router provides type-safe navigation with autocomplete for all routes.

---

## 🔒 Type Safety and Validation

### TypeScript

Full TypeScript support with strict mode enabled:
- Static type checking at compile time
- IntelliSense and autocomplete in your IDE
- Fewer runtime errors

### Zod Runtime Validation

Use Zod for runtime validation of:
- API responses
- Environment variables
- User input
- External data

```typescript
import { z } from 'zod';

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
});

// Validate and parse
const user = UserSchema.parse(data);
```

---

## 🧹 Code Quality

### Linting

ESLint 9 is configured with Expo's recommended rules:

```bash
npm run lint
```

### Formatting

Prettier is configured with Szum-Tech's shared config:

```bash
# Check formatting
npm run prettier:check

# Auto-fix formatting
npm run prettier:write
```

### Pre-Commit Workflow (Recommended)

```bash
npm run lint && npm run prettier:write
```

---

## 🚀 Building for Production

### Recommended: EAS Build

[Expo Application Services (EAS)](https://docs.expo.dev/eas/) provides cloud-based builds for iOS and Android.

#### 1. Install EAS CLI

```bash
npm install -g eas-cli
```

#### 2. Login and Initialize

```bash
eas login
eas init
```

#### 3. Configure Build Profile

EAS will create `eas.json`. Customize build profiles as needed.

#### 4. Build for Production

```bash
# iOS build
eas build --platform ios --profile production

# Android build
eas build --platform android --profile production

# Both platforms
eas build --platform all --profile production
```

#### 5. Submit to App Stores

```bash
# Submit to App Store
eas submit --platform ios

# Submit to Google Play
eas submit --platform android
```

### Alternative: Local Builds (Advanced)

For local/bare workflow builds:

```bash
# Generate native projects
npx expo prebuild

# Build iOS (requires macOS)
cd ios && xcodebuild ...

# Build Android
cd android && ./gradlew assembleRelease
```

### Web Deployment

For web deployment:

```bash
npx expo export:web
```

Deploy the `web-build` folder to:
- **Vercel**: `vercel web-build`
- **Netlify**: `netlify deploy --dir=web-build`
- **GitHub Pages**: Push to gh-pages branch

---

## 📦 Updating Dependencies

### Expo SDK Updates

Keep Expo SDK and related packages in sync:

```bash
# Check for updates
npx expo install --check

# Fix mismatched versions
npx expo install --fix

# Upgrade to latest Expo SDK
npx expo upgrade
```

### Other Dependencies

```bash
# Check outdated packages
npm outdated

# Update specific package
npm install package-name@latest

# Update all packages (careful!)
npm update
```

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Reanimated Plugin Not Working

**Problem**: Animations don't work or you see Reanimated errors.

**Solution**: Ensure the Reanimated plugin is the **last plugin** in `babel.config.js`, then clear cache:

```bash
npx expo start -c
```

#### iOS Build Errors After Native Changes

**Problem**: Build fails after adding native dependencies or running `expo prebuild`.

**Solution**: Reinstall iOS pods:

```bash
cd ios
pod install
cd ..
```

Then rebuild:

```bash
npm run ios
```

#### Metro Bundler Cache Issues

**Problem**: App shows old code or strange errors.

**Solution**: Clear all caches:

```bash
# Clear Expo cache
npx expo start -c

# Clear npm cache (if needed)
npm cache clean --force

# Clear watchman (if installed)
watchman watch-del-all
```

#### Android Build Fails

**Problem**: Android build or run fails with Gradle errors.

**Solution**: Clean and rebuild:

```bash
cd android
./gradlew clean
cd ..
npm run android
```

#### Environment Variables Not Working

**Problem**: Environment variables are undefined.

**Solution**:
1. Ensure variables are prefixed with `EXPO_PUBLIC_`
2. Restart the dev server after changing `.env` files
3. Check validation in `src/data/env.ts`

#### Check Environment Setup

Run Expo's built-in diagnostics:

```bash
npx expo doctor
```

This checks for:
- Node.js version
- Package version mismatches
- Configuration issues

### Still Having Issues?

1. Check [Expo Documentation](https://docs.expo.dev/)
2. Search [Expo Forums](https://forums.expo.dev/)
3. Open an issue on [GitHub](https://github.com/JanSzewczyk/react-native-szumplate/issues)

---

## 🛠️ Tech Stack

### Core Framework
- **[React](https://react.dev/)** ![](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/react-native-szumplate/react?style=flat-square&label=) - UI library
- **[React Native](https://reactnative.dev/)** ![](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/react-native-szumplate/react-native?style=flat-square&label=) - Mobile framework
- **[Expo](https://expo.dev/)** ![](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/react-native-szumplate/expo?style=flat-square&label=) - Development platform
- **[TypeScript](https://www.typescriptlang.org/)** ![](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/react-native-szumplate/dev/typescript?style=flat-square&label=) - Type safety

### Navigation & Routing
- **[Expo Router](https://docs.expo.dev/router/introduction/)** ![](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/react-native-szumplate/expo-router?style=flat-square&label=) - File-based routing
- **[React Navigation](https://reactnavigation.org/)** ![](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/react-native-szumplate/@react-navigation/native?style=flat-square&label=) - Navigation primitives

### Styling
- **[NativeWind](https://www.nativewind.dev/)** ![](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/react-native-szumplate/nativewind?style=flat-square&label=) - Tailwind for React Native
- **[Tailwind CSS](https://tailwindcss.com/)** ![](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/react-native-szumplate/tailwindcss?style=flat-square&label=) - Utility-first CSS

### Animation
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** ![](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/react-native-szumplate/react-native-reanimated?style=flat-square&label=) - Smooth animations
- **[React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)** ![](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/react-native-szumplate/react-native-gesture-handler?style=flat-square&label=) - Native gestures

### Validation & Types
- **[Zod](https://zod.dev/)** ![](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/react-native-szumplate/zod?style=flat-square&label=) - Schema validation
- **[T3 Env](https://env.t3.gg/)** ![](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/react-native-szumplate/@t3-oss/env-core?style=flat-square&label=) - Type-safe environment variables

### Development Tools
- **[ESLint](https://eslint.org/)** ![](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/react-native-szumplate/dev/eslint?style=flat-square&label=) - Code linting
- **[Prettier](https://prettier.io/)** ![](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/react-native-szumplate/dev/prettier?style=flat-square&label=) - Code formatting
- **[@szum-tech/prettier-config](https://www.npmjs.com/package/@szum-tech/prettier-config)** ![](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/react-native-szumplate/dev/@szum-tech/prettier-config?style=flat-square&label=) - Shared Prettier config

### Expo Modules
- **expo-blur** - Native blur effects
- **expo-font** - Custom font loading
- **expo-haptics** - Haptic feedback
- **expo-image** - Optimized images
- **expo-linking** - Deep linking
- **expo-status-bar** - Status bar control
- **expo-system-ui** - System UI customization
- **expo-web-browser** - In-app browser

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure your code passes all tests and follows the project's coding standards.

---

## 📜 License

This project is licensed under the **MIT License**. For more information, see the [LICENSE](LICENSE) file.

---

## 🙏 Acknowledgments

Built with amazing tools from the React Native ecosystem:

- [Expo Team](https://expo.dev/) for the incredible development platform
- [Software Mansion](https://swmansion.com/) for Reanimated and Gesture Handler
- [NativeWind Team](https://www.nativewind.dev/) for Tailwind CSS in React Native
- [Vercel](https://vercel.com/) for React and Next.js inspiration
- The entire React Native community

---

## 📧 Support & Contact

- **Author**: [Jan Szewczyk](https://github.com/JanSzewczyk)
- **Organization**: [Szum-Tech](https://github.com/szum-tech)
- **Repository**: [github.com/JanSzewczyk/react-native-szumplate](https://github.com/JanSzewczyk/react-native-szumplate)
- **Issues**: [Report a bug or request a feature](https://github.com/JanSzewczyk/react-native-szumplate/issues)

---

<div align="center">

**Made with ❤️ by [Szum-Tech](https://github.com/szum-tech)**

If this template helped you, please consider giving it a ⭐ on GitHub!

[⬆ Back to Top](#-react-native-szumplate)

</div>