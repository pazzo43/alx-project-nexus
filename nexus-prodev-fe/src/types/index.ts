nexus-prodev-fe/
├── src/
│   ├── app/                # Expo Router (File-based navigation)
│   │   ├── (auth)/         # Group for Login/Signup
│   │   ├── (tabs)/         # Group for main App Navigation
│   │   └── _layout.tsx     # Root layout & Providers
│   ├── components/         # Reusable UI (Buttons, Cards, Inputs)
│   ├── features/           # Feature-specific logic (e.g., store, booking)
│   ├── services/           # API calls (Where you talk to the BE team)
│   │   └── api.ts          # Axios/Fetch instance configuration
│   ├── hooks/              # Custom hooks (e.g., useAuth, useFetch)
│   ├── constants/          # Colors, Fonts, API_URL
│   └── types/              # TypeScript interfaces/types
├── assets/                 # Images, Fonts, Icons
└── app.json                # Expo configuration


npx create-expo-app@latest NexusProDev --template tabs
cd NexusProDev

npm install @reduxjs/toolkit react-redux axios nativewind tailwindcss
npx expo install react-native-reanimated react-native-safe-area-context expo-router

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

git init
git add .
git commit -m "feat: set up project structure with React and TypeScript"
