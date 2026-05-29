/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#21243d",
        coral: "#ff6464",
        cyan: "#00a8cc",
        charcoal: "#2b353f",
      },
      fontFamily: {
        sans: ["Manrope", "Sora", "IBM Plex Sans", "system-ui", "sans-serif"],
        serif: ["Lora", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(33, 36, 61, 0.12)",
      },
    },
  },
  plugins: [],
};
