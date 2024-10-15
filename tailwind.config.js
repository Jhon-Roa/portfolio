  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
        screens: {
          'pt': {
            'raw': '(orientation: portrait)'
          },
          'ls': {
            'raw': '(orientation: landscape)'
          }
        },
        keyframes: {
          slidein: {
            from: {
              opacity: "0",
              transform: "translateY(-10px)",
            },
            to: {
              opacity: "1",
              transform: "translateY(0)",
            },
          },
          slideInLeft: {
            '0%': { transform: 'translateX(-100%)', opacity: 0 },
            '100%': { transform: 'translateX(0)', opacity: 1 },
          },
          slideInRight: {
            '0%': { transform: 'translateX(100%)', opacity: 0 },
            '100%': { transform: 'translateX(0)', opacity: 1 },
          },
          slideOutLeft: {
            '0%': { transform: 'translateX(0)', opacity: 1 },
            '100%': { transform: 'translateX(-100%)', opacity: 0 },
          },
          slideOutRight: {
            '0%': { transform: 'translateX(0)', opacity: 1 },
            '100%': { transform: 'translateX(100%)', opacity: 0 },
          },
        },
        animation: {
          slidein: "slidein 1s ease 300ms",
          slideInLeft: 'slideInLeft 0.5s ease-out',
          slideInRight: 'slideInRight 0.5s ease-out',
          slideOutLeft: 'slideOutLeft 0.5s ease-out',
          slideOutRight: 'slideOutRight 0.5s ease-out',
        }
      },
    },
    plugins: [],
  };
