# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React-based interactive travel itinerary app for a 3-day Kyushu trip (Fukuoka → Beppu → Yufuin). The app displays timelines, gourmet recommendations, an interactive map, and shopping checklists.

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
```

## Environment Setup

Copy `.env.example` to `.env.local` and fill in API keys:
- `VITE_GOOGLE_MAPS_API_KEY` - Required for map functionality
- `VITE_OPENWEATHER_API_KEY` - Optional; app falls back to mock data if missing

## Architecture

### State Management
App uses React useState at the root level (`App.jsx`). Key state:
- `activeTab` - Controls which view is displayed (timeline/gourmet/map/shopping)
- `activeDayId` - Selected day (1, 2, or 3)
- `navigationMode` - Toggle between navigation and viewing modes

### Data Flow
- Static itinerary data lives in `src/data/itinerary.js` and `itinerary_enhanced.js`
- Weather data fetched from OpenWeatherMap API via `src/services/weatherService.js`, with mock fallback in `src/data/weatherMock.js`
- Shopping list state persisted to localStorage

### Component Structure
- `src/components/layout/` - Header, TabNav (bottom navigation)
- `src/components/timeline/` - DaySelector, TimelineItem, TimelineView
- `src/components/gourmet/` - GourmetCard, GourmetView
- `src/components/map/` - MapView, MapMarker, MapRoute, MapLegend (uses @vis.gl/react-google-maps)
- `src/components/shopping/` - ShoppingView, ShoppingCard, CheckListItem
- `src/components/weather/` - WeatherWidget, AnimatedWeatherIcon

### Custom Hooks
- `useGeolocation` - Watches user's GPS position for distance calculations
- `useWeather` - Fetches weather data with automatic mock fallback

### Path Aliases (configured in vite.config.js)
- `@/` → `src/`
- `@components/` → `src/components/`
- `@data/` → `src/data/`
- `@hooks/` → `src/hooks/`
- `@services/` → `src/services/`
- `@utils/` → `src/utils/`
- `@config/` → `src/config/`

## Styling

- Tailwind CSS with custom pastel color palette (primary: pink, success: teal, accent: orange)
- Custom fonts: M PLUS Rounded 1c, Quicksand
- Mobile-first responsive design (max-width: 448px container)
- Custom animations: float, bounce-soft, pulse-slow

## Deployment

Deployed to Vercel. Push to main branch triggers auto-deploy. Set environment variables in Vercel dashboard.

## React Performance Guidelines

When writing or reviewing React code, apply these patterns by priority:

**Critical:**
- Use `Promise.all()` for independent async operations (avoid waterfalls)
- Import directly from source files, not barrel files (`@/components/Button` not `@/components`)
- Use `next/dynamic` for heavy components (maps, charts)

**High:**
- Use `React.cache()` for server-side request deduplication
- Minimize data passed to client components (compute on server)

**Medium:**
- Use lazy state initialization: `useState(() => expensiveValue)`
- Use SWR for client-side data fetching with auto-deduplication
- Use `startTransition` for non-urgent state updates

Full guidelines: `.claude/skills/react-best-practices/references/react-performance-guidelines.md`

## Key Data Structure

Each day in `ITINERARY_DATA` contains:
- `activities[]` - Timeline events with `time`, `type`, `title`, `detail`, `locationKey`
- `gourmet[]` - Restaurant recommendations with `name`, `type`, `tags`, `desc`, `locationKey`
- `mapCenter` - Default map center coordinates for the day
- `isoDate` - Used for weather API lookups

Activity types: `transport`, `drive`, `food`, `shopping`, `highlight`, `stay`, `sight`, `activity` (each has a color in `ACTIVITY_COLORS`)
