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

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-backend-api.com/api/v1', // Replace with your IP during local dev
  headers: { 'Content-Type': 'application/json' }
});

export default api;


