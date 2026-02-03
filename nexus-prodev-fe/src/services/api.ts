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


git init
git add .
git commit -m "feat: set up project structure with React and TypeScript"


// src/services/api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://YOUR-BACKEND-URL/api/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page = 1, category, ordering }) => ({
        url: "products/",
        params: { page, category, ordering },
      }),
    }),
  }),
});

export const { useGetProductsQuery } = api;


// src/services/api.ts
getProducts: builder.query({
  query: ({ page = 1, category, ordering }) => ({
    url: "products/",
    params: {
      page,
      category,
      ordering, // "price" or "-price"
    },
  }),
}),


const { data, isLoading } = useGetProductsQuery({
  page: 1,
  category: selectedCategory ?? undefined,
  ordering: sortOrder,
});


git add .
git commit -m "feat: add category filtering to product list"
git commit -m "feat: implement price sorting using API params"
git commit -m "refactor: connect filters to RTK Query"
