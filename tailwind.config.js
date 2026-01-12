/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          bg: '#f8fafc',
          card: '#ffffff',
          text: '#1e293b',
          'text-secondary': '#64748b',
          border: '#e2e8f0',
          primary: '#7c3aed',
          'primary-hover': '#6d28d9',
        },
        // Dark mode colors (default)
        dark: {
          bg: '#0d1117',
          card: '#161b22',
          text: '#f1f5f9',
          'text-secondary': '#94a3b8',
          border: '#30363d',
          primary: '#b384f9',
          'primary-hover': '#9866e3',
        }
      }
    },
  },
  plugins: [],
}
