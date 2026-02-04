# Nexus ProDev: Dynamic E-Commerce Catalog

## Project Overview
A high-performance mobile e-commerce discovery engine built with **React Native (Expo)**. This project demonstrates a production-ready frontend architecture focusing on scalability, performance, and user convenience.

## Major Learnings

## Features
- Product listing from API
- Category filtering
- Price sorting (asc/desc)
- Pagination & infinite scrolling
- Loading & error states
- Responsive mobile UI
- 
### Architecture & Tech Stack
- **State Management:** Redux Toolkit (Slices & RTK Query for automated caching).
- **Styling:** NativeWind (Tailwind CSS for Mobile).
- **Navigation:** Expo Router (File-based routing).
- **Performance:** Infinite scrolling, Skeleton loaders, and memoized components.

## API Integration
Uses backend endpoints provided by the ProDev Backend project.

### Design System Rules
Configured via `tailwind.config.js` to ensure visual consistency across all components:
- **Primary Color:** #2563eb (Nexus Blue)
- **Border Radius:** 12px (Nexus Smooth)
  
### Core Concepts
* **System Design & Analysis:** Structuring scalable frontend architectures and component hierarchies.
* **TypeScript:** Implementing strict type-safety to reduce runtime errors and improve developer experience.
* **API Integration:** Data fetching strategies using **GraphQL** and RESTful services to connect with backend systems.
* **Performance Optimization:** Auditing and improving web vitals using **Google Lighthouse**.

## Challenges & Solutions
### challenge 1
- **Challenge :** Handling list performance for 100+ items. 
- **Solution:** Implemented windowed rendering via `FlatList` with `onEndReached` pagination.
  
### Challenge 2: Cross-Platform Compatibility
* **The Issue:** Ensuring UI consistency between React Native (Mobile) and Next.js (Web).
* **The Solution:** Leveraged **Expo Router** and shared TypeScript interfaces to ensure a unified data flow and navigation structure across platforms.

### Challenge 3: API State Management
* **The Issue:** Handling complex loading and error states during Backend integration.
* **The Solution:** Implemented robust error boundaries and used modern hooks to manage the lifecycle of asynchronous requests efficiently.

## Best Practices & Takeaways
* **Atomic Design:** Breaking UIs into small, reusable components for better maintainability.
* **Accessibility (a11y):** Prioritizing semantic HTML and ARIA labels to ensure inclusivity (as referenced in MDN Docs).
* **Clean Code:** Utilizing meaningful Git commits and following professional naming conventions.

## Collaboration
This project thrives on the synergy between:
* **Frontend Cohort:** For study sessions and UI/UX brainstorming.
* **Backend Cohort:** Essential collaboration for consuming API endpoints and system integration.
* **Platform:** Discussions held in the `#ProDevProjectNexus` Discord channel.

git add README.md
git commit -m "docs: add initial project README"
git push

## Author
Patrick Ndicunguye

*Created by pazzo43 as part of the ProDev Frontend Engineering Program (January 2026).*
