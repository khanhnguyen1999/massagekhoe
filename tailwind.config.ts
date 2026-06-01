import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./messages/**/*.{json}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        background: "#FCFAF7",
        foreground: "#1F1A17",
        card: "#FFFDFC",
        primary: "#3B2A20",
        secondary: "#F7F1E8",
        accent: "#C9A66B",
        success: "#8A9A7B",
        border: "rgba(59, 42, 32, 0.12)"
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 16px 50px rgba(59, 42, 32, 0.08)",
        glow: "0 12px 40px rgba(201, 166, 107, 0.18)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(201, 166, 107, 0.18), transparent 40%)",
        "section-fade":
          "linear-gradient(180deg, rgba(247, 241, 232, 0.8), rgba(252, 250, 247, 0.2))"
      }
    }
  },
  plugins: []
};

export default config;
