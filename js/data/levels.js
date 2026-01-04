import ThemesSettings from "../themes.js";

const colors = ThemesSettings.themes[ThemesSettings.currentIndex].colors;

export const levels = {
  1: {
    completed: false,
    name: "GENESIS",
    playerStart: { x: 100, y: 600 },
    platforms: [
      { x: 0, y: 700, width: 900, height: 50 },
      { x: 450, y: 580, width: 200, height: 20 },
      { x: 1250, y: 700, width: 800, height: 50 },
      { x: 2100, y: 600, width: 150, height: 20 },
      { x: 2400, y: 500, width: 150, height: 20 },
      { x: 2100, y: 400, width: 150, height: 20 },
      { x: 2400, y: 300, width: 800, height: 20 },
      { x: 3300, y: 500, width: 200, height: 20 },
      { x: 3600, y: 650, width: 200, height: 20 },
      { x: 4000, y: 650, width: 1000, height: 50 },
      { x: 5200, y: 550, width: 150, height: 20 },
      { x: 5450, y: 450, width: 300, height: 20 },
    ],
    hazards: [
      { x: 700, y: 670, width: 150, height: 30 },
      { x: 2600, y: 270, width: 100, height: 30 },
      { x: 2900, y: 270, width: 100, height: 30 },
      { x: 4200, y: 620, width: 100, height: 30 },
      { x: 4500, y: 620, width: 100, height: 30 },
      { x: 4800, y: 550, width: 50, height: 100 },
    ],
    goal: { x: 5600, y: 370, width: 60, height: 80 },
  },
  2: {
    completed: false,
    name: "VELOCITY",
    playerStart: { x: 100, y: 600 },
    platforms: [
      { x: 0, y: 700, width: 600, height: 50 },
      { x: 1000, y: 700, width: 400, height: 50 }, // Landing 1 (Gap 400px - Needs Jump+Dash)
      { x: 1800, y: 600, width: 400, height: 50 }, // Landing 2 (Gap 400px)
      { x: 2600, y: 500, width: 300, height: 50 }, // Sequence continues
      { x: 3400, y: 500, width: 1000, height: 50 }, // Long run for speed
      { x: 4800, y: 400, width: 200, height: 20 },
    ],
    hazards: [
      { x: 600, y: 690, width: 400, height: 20 },
      { x: 1400, y: 690, width: 400, height: 20 },
      { x: 3800, y: 470, width: 50, height: 30 }, // Speed bump hazard
      { x: 4100, y: 470, width: 50, height: 30 },
    ],
    goal: { x: 4900, y: 320, width: 60, height: 80 },
  },
  3: {
    completed: false,
    name: "GLITCH",
    playerStart: { x: 100, y: 600 },
    platforms: [
      { x: 0, y: 700, width: 800, height: 50 }, // Start
      { x: 500, y: 300, width: 50, height: 400 }, // The Wall (Blocks Jump, must Glitch Through)
      { x: 800, y: 700, width: 500, height: 50 }, // Landing
      { x: 1500, y: 700, width: 1000, height: 50 }, // Run area
      { x: 2000, y: 200, width: 50, height: 500 }, // Wall 2
      { x: 2300, y: 700, width: 500, height: 50 }, // Landing 2
    ],
    hazards: [
      { x: 400, y: 670, width: 100, height: 30 }, // Hazard at wall base
      { x: 1900, y: 670, width: 100, height: 30 },
    ],
    goal: { x: 2600, y: 620, width: 60, height: 80 },
  },
};
