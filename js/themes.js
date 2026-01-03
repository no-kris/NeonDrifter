import { GameState } from "./state.js";

const ThemesSettings = {
  currentIndex: 0,
  themes: [
    {
      name: "CYBER",
      colors: {
        bg: "#040409",
        canvas: "#080814",
        primary: "#ffffff",
        secondary: "#00add8",
        hazard: "#ff4444",
        goal: "#00ffaa",
        grid: "#111122",
      },
    },
    {
      name: "FOREST",
      colors: {
        bg: "#020502",
        canvas: "#060e06",
        primary: "#ffffff",
        secondary: "#44aa66",
        hazard: "#ffd700",
        goal: "#ffffff",
        grid: "#0d1a0d",
      },
    },
    {
      name: "DUSK",
      colors: {
        bg: "#2e0a13",
        canvas: "#2e0a13",
        primary: "#ffffff",
        secondary: "#ff99cc",
        hazard: "#ff3300",
        goal: "#66ccff",
        grid: "#4a1525",
      },
    },
    {
      name: "MAGMA",
      colors: {
        bg: "#1a0505",
        canvas: "#260a0a",
        primary: "#ffcc00",
        secondary: "#ff4400",
        hazard: "#880000",
        goal: "#ffffff",
        grid: "#330505",
      },
    },
    {
      name: "MOCHA",
      colors: {
        bg: "#1a1008",
        canvas: "#261a10",
        primary: "#ede0d4",
        secondary: "#d4a373",
        hazard: "#bc6c25",
        goal: "#ffffff",
        grid: "#3e2718",
      },
    },
    {
      name: "ROYAL",
      colors: {
        bg: "#100018",
        canvas: "#1a0026",
        primary: "#ffd700",
        secondary: "#9933ff",
        hazard: "#ff0066",
        goal: "#ffffff",
        grid: "#2a0040",
      },
    },
    {
      name: "AMBER",
      colors: {
        bg: "#100500",
        canvas: "#1a0800",
        primary: "#ffb000",
        secondary: "#cc5500",
        hazard: "#ff0000",
        goal: "#ffeebb",
        grid: "#331100",
      },
    },
    {
      name: "CANDY",
      colors: {
        bg: "#220011",
        canvas: "#2d0016",
        primary: "#ffffff",
        secondary: "#ff66aa",
        hazard: "#66ccff",
        goal: "#ffff66",
        grid: "#440022",
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
