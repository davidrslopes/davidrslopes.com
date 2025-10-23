# David RS Lopes - Personal Portfolio (React)# React + Vite



This is a React-based version of davidrslopes.com, built with Vite, React, and Bootstrap.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## FeaturesCurrently, two official plugins are available:



- ⚡ Built with Vite for lightning-fast development- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- ⚛️ React 18 with modern hooks- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- 🎨 Bootstrap 5 for styling

- 🌍 Multi-language support (Portuguese/English)## React Compiler

- 📱 Fully responsive design

- 🔔 Interactive toast notificationsThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- 📊 Google Analytics integration

- 🎯 SEO optimized with Open Graph tags## Expanding the ESLint configuration



## Project StructureIf you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


```
src/
├── components/
│   └── Hero.jsx          # Main hero section component
├── hooks/
│   └── useLanguage.js    # Custom hook for language detection
├── App.jsx               # Main app component
├── main.jsx              # Entry point
└── styles.scss           # Custom styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Bootstrap 5** - CSS framework
- **React-Bootstrap** - Bootstrap components for React
- **Sass** - CSS preprocessor
- **Google Fonts** - Gochi Hand & Noto Sans Display

## Language Detection

The app automatically detects the user's browser language and displays content in Portuguese or English accordingly. The language detection is handled by the `useLanguage` hook.

## Components

### Hero Component
The main landing page component featuring:
- Dynamic greeting text
- Contact button (email link)
- Interactive "do nothing" button with toast notification
- Responsive layout

### Toast Notification
Shows a humorous message when clicking the "do nothing" button, demonstrating React Bootstrap's Toast component.

## Deployment

To deploy this project:

1. Build the production version:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider (Netlify, Vercel, GitHub Pages, etc.)

## License

Personal portfolio project by David RS Lopes

## Contact

- Email: davidrslopes@gmail.com
- Twitter: @davidrslopes
