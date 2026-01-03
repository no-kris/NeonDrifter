import { GameState } from "./state.js";

const ThemesSettings = {
  currentIndex: 0,
  themes: [
    {
      name: "CYBER",
      colors: {
        bg: "#040409", // Obsidian Blue
        canvas: "#080814",
        primary: "#ffffff", // Pure White
        secondary: "#00add8", // Solid Cerulean
        hazard: "#ff4444", // Matte Red
        goal: "#00ffaa", // Teal
        grid: "#111122",
      },
    },
    {
      name: "FOREST",
      colors: {
        bg: "#020502", // Deepest Pine
        canvas: "#060e06",
        primary: "#ffffff", // Pure White
        secondary: "#44aa66", // Clear Green
        hazard: "#ffd700", // Gold
        goal: "#ffffff",
        grid: "#0d1a0d",
      },
    },
    {
      name: "DUSK",
      colors: {
        bg: "#2e0a13", // Deep Wine (User Choice)
        canvas: "#2e0a13", // Match Game BG to Body BG
        primary: "#ffffff", // Pure White
        secondary: "#ff99cc", // Bright Pastel Pink (High Contrast on Wine)
        hazard: "#ff3300", // Neon Orange/Red
        goal: "#66ccff", // Sky Blue
        grid: "#4a1525", // Lighter Wine Grid
      },
    },
    {
      name: "SLATE",
      colors: {
        bg: "#080808", // Deepest Grey
        canvas: "#101010",
        primary: "#ffffff", // Pure White
        secondary: "#6688aa", // Steel Blue
        hazard: "#cc5555", // Matte Red
        goal: "#ffffff",
        grid: "#1a1a1a",
      },
    },
  ],
  init() {
    this.apply(0);
  },
  toggle() {
    this.currentIndex = (this.currentIndex + 1) % this.themes.length;
    this.apply(this.currentIndex);
  },
  apply(idx) {
    const theme = this.themes[idx];
    const r = document.documentElement;
    // Update CSS Vars
    Object.keys(theme.colors).forEach((k) =>
      r.style.setProperty(`--c-${k}`, theme.colors[k])
    );
    document.getElementById("theme-btn").innerText = `THEME: ${theme.name}`;
    GameState.colors = theme.colors;
  },
};

export default ThemesSettings;
