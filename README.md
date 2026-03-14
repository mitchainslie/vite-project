# Vite Project

A modern, responsive React application built with Vite, TypeScript, and Tailwind CSS v4. Features a landing page and menu page with custom wood color palette and mobile-first responsive design.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Building](#building)
- [Deployment](#deployment)
- [Features](#features)
- [Custom Colors](#custom-colors)
- [Routing](#routing)
- [Responsive Design](#responsive-design)

## Tech Stack

### Core Dependencies
- **React**: ^19.2.0 - UI library
- **React DOM**: ^19.2.0 - React renderer for the web
- **React Router DOM**: ^7.13.1 - Client-side routing (HashRouter for GitHub Pages)

### Build Tools
- **Vite**: ^7.3.1 - Next-generation frontend build tool
- **TypeScript**: ~5.9.3 - Type-safe JavaScript
- **@vitejs/plugin-react**: ^5.1.1 - React plugin for Vite with React Compiler support

### Styling
- **Tailwind CSS**: ^4.2.1 - Utility-first CSS framework
- **@tailwindcss/postcss**: ^4.2.1 - PostCSS plugin for Tailwind v4
- **PostCSS**: ^8.5.8 - CSS transformation tool
- **Autoprefixer**: ^10.4.27 - Adds vendor prefixes automatically

### Code Quality
- **ESLint**: ^9.39.1 - JavaScript linter
- **TypeScript ESLint**: ^8.48.0 - TypeScript support for ESLint
- **eslint-plugin-react-hooks**: ^7.0.1 - React Hooks linting rules
- **eslint-plugin-react-refresh**: ^0.4.24 - React Refresh linting rules

### Deployment
- **gh-pages**: ^6.3.0 - Publish to GitHub Pages

### Additional Tools
- **babel-plugin-react-compiler**: ^1.0.0 - React Compiler for optimizations

## Project Structure

```
vite-project/
├── src/
│   ├── assets/
│   │   ├── icons/          # SVG icons (react.svg)
│   │   └── images/         # Image files (MAG01755.jpg)
│   ├── components/
│   │   └── Navbar.tsx      # Reusable navigation component with scroll behavior
│   ├── pages/
│   │   ├── Landing.tsx     # Landing page with hero section
│   │   └── Menu.tsx        # Menu page with food items
│   ├── App.tsx             # Main app component with routing
│   ├── App.css             # App-specific styles
│   ├── index.css           # Global styles and Tailwind v4 configuration
│   └── main.tsx            # Application entry point
├── public/
│   ├── images/             # Static images
│   └── vite.svg            # Vite logo
├── dist/                   # Production build output (generated)
├── node_modules/           # Dependencies (generated)
├── index.html              # HTML entry point
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── tsconfig.app.json       # TypeScript app configuration
├── tsconfig.node.json      # TypeScript node configuration
├── tailwind.config.js      # Tailwind configuration (v4 uses CSS for theme)
├── postcss.config.js       # PostCSS configuration
├── eslint.config.js        # ESLint configuration
├── package.json            # Project dependencies and scripts
└── README.md               # This file
```

## Prerequisites

Ensure you have the following installed:

- **Node.js**: v22.21.0 or higher
- **npm**: 11.11.1 or higher

Check your versions:
```bash
node --version
npm --version
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/mitchainslie/vite-project.git
cd vite-project
```

2. Install dependencies:
```bash
npm install
```

## Development

### Start Development Server

Run the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at:
- Local: `http://localhost:5173/vite-project/`
- If port 5173 is occupied, Vite will automatically try the next available port

### Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `vite` | Start development server |
| `build` | `tsc -b && vite build` | Type-check and build for production |
| `lint` | `eslint .` | Run ESLint to check code quality |
| `preview` | `vite preview` | Preview production build locally |
| `deploy` | `gh-pages -d dist` | Deploy to GitHub Pages |

## Building

### Production Build

Create an optimized production build:

```bash
npm run build
```

This will:
1. Run TypeScript compiler to check types
2. Build optimized assets to the `dist/` directory
3. Generate production-ready HTML, CSS, and JavaScript

### Preview Production Build

Test the production build locally:

```bash
npm run preview
```

## Deployment

### Deploy to GitHub Pages

The project is configured to deploy to GitHub Pages:

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

Or run both commands together:
```bash
npm run build && npm run deploy
```

### Live Site

The application is deployed at:
- **URL**: `https://mitchainslie.github.io/vite-project/#/`
- **Menu**: `https://mitchainslie.github.io/vite-project/#/menu`

### GitHub Pages Configuration

**Important**: Ensure GitHub Pages is enabled in your repository settings:
1. Go to `https://github.com/mitchainslie/vite-project/settings/pages`
2. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. Click **Save**

## Features

### 1. Floating Navigation Bar
- **Location**: `src/components/Navbar.tsx`
- Fixed position at the top
- Hides when scrolling down (past 100px)
- Shows immediately when scrolling up
- Smooth CSS transitions (300ms)
- Responsive design with mobile hamburger menu

### 2. Landing Page
- **Location**: `src/pages/Landing.tsx`
- Hero section with image and CTA buttons
- Services section with 3-column grid
- Footer
- Desktop-first responsive layout

### 3. Menu Page
- **Location**: `src/pages/Menu.tsx`
- Food menu organized by categories:
  - Appetizers
  - Main Courses
  - Desserts
- 2-column grid on desktop, stacks on mobile
- Call-to-action section

### 4. React Router with HashRouter
- Client-side routing for GitHub Pages compatibility
- Routes:
  - `/` - Landing page
  - `/menu` - Menu page
- Uses `HashRouter` for static hosting (URLs have `#/` prefix)

## Custom Colors

### Wood Color Palette

The project includes a custom "wood" color palette defined in `src/index.css`:

| Shade | Hex Color | Usage |
|-------|-----------|-------|
| `wood-50` | `#f9f7f5` | Lightest - backgrounds |
| `wood-100` | `#f0ebe6` | Very light |
| `wood-200` | `#e0d4c9` | Light |
| `wood-300` | `#d0bca9` | Medium light |
| `wood-400` | `#a8906f` | Medium |
| `wood-500` | `#553C2A` | **Base color** |
| `wood-600` | `#4d3625` | Medium dark |
| `wood-700` | `#3f2d1f` | Dark |
| `wood-800` | `#322419` | Very dark |
| `wood-900` | `#261c14` | Darkest |
| `wood-950` | `#1a130d` | Ultra dark |

### Usage Examples

```tsx
// Text colors
<h1 className="text-wood-500">Wood text</h1>

// Background colors
<div className="bg-wood-100">Light wood background</div>
<div className="bg-wood-900">Dark wood background</div>

// Border colors
<div className="border-2 border-wood-500">Wood border</div>

// Hover states
<button className="bg-wood-500 hover:bg-wood-600">Hover effect</button>
```

### Tailwind CSS v4 Configuration

**Important**: This project uses Tailwind CSS v4, which has a different configuration system:

- Custom colors are defined in CSS using the `@theme` directive (not in `tailwind.config.js`)
- Located in `src/index.css` at the top of the file
- Uses CSS custom properties: `--color-wood-*`

## Routing

### HashRouter Configuration

The application uses `HashRouter` for GitHub Pages compatibility:

**File**: `src/App.tsx`
```tsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
```

### Why HashRouter?

- **GitHub Pages** doesn't support server-side routing
- HashRouter works with static hosting (no server configuration needed)
- URLs use hash format: `https://example.com/#/path`
- All routes work without 404 errors on direct access or refresh

### Adding New Routes

To add a new page:

1. Create a new component in `src/pages/`
2. Import it in `src/App.tsx`
3. Add a new `<Route>` element

Example:
```tsx
import NewPage from './pages/NewPage'

<Routes>
  <Route path="/" element={<Landing />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="/new" element={<NewPage />} />
</Routes>
```

## Responsive Design

### Desktop-First Approach

This project uses a **desktop-first** responsive design strategy:

**Breakpoints** (defined in `tailwind.config.js`):
```javascript
{
  'desktop': {'min': '1280px'},   // 1280px and up
  'laptop': {'max': '1279px'},    // Up to 1279px
  'tablet': {'max': '1023px'},    // Up to 1023px
  'mobile': {'max': '767px'},     // Up to 767px
  'sm-mobile': {'max': '639px'},  // Up to 639px
}
```

### Usage

Default styles are for desktop, then override for smaller screens:

```tsx
// Desktop: 2 columns, Tablet: 1 column
<div className="grid grid-cols-2 tablet:grid-cols-1">

// Desktop: text-6xl, Tablet: text-5xl, Mobile: text-4xl
<h1 className="text-6xl tablet:text-5xl mobile:text-4xl">

// Desktop: px-8, Tablet: px-6, Mobile: px-4
<div className="px-8 tablet:px-6 mobile:px-4">
```

## Configuration Files

### vite.config.ts

```typescript
export default defineConfig({
  base: '/vite-project/',  // GitHub Pages base path
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
```

**Important**:
- `base: '/vite-project/'` is required for GitHub Pages project repos
- If deploying to `username.github.io`, change to `base: '/'`

### postcss.config.js

```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},  // Tailwind v4 PostCSS plugin
    autoprefixer: {},
  },
}
```

### tailwind.config.js

Contains custom breakpoints for desktop-first responsive design. In Tailwind v4, theme colors are defined in CSS (see `src/index.css`).

## Troubleshooting

### Issue: `bg-wood-*` classes not working

**Solution**: This project uses Tailwind v4. Custom colors must be defined in `src/index.css` using the `@theme` directive, not in `tailwind.config.js`.

### Issue: 404 on GitHub Pages

**Solution**:
1. Check that GitHub Pages is enabled in repository settings
2. Ensure the `gh-pages` branch exists
3. Verify `base` path in `vite.config.ts` matches your repo name

### Issue: Routes don't work on GitHub Pages

**Solution**: The project uses `HashRouter` specifically for GitHub Pages. Ensure you're using `HashRouter` and not `BrowserRouter` in `src/App.tsx`.

### Issue: Permission errors with npm

**Solution**: Fix npm permissions:
```bash
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) node_modules
```

## Development Notes

### React Compiler

This project uses the experimental React Compiler (`babel-plugin-react-compiler`) for automatic optimizations. This may impact build performance slightly but provides runtime optimizations.

### Hot Module Replacement (HMR)

Vite provides fast HMR out of the box. Changes to components will update instantly without full page reload.

### Type Checking

TypeScript is configured for strict type checking. Run type checks separately:
```bash
npx tsc --noEmit
```

## License

Private project. All rights reserved.

## Author

mitchainslie

---

**Last Updated**: March 14, 2026
