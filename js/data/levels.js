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
      { x: 0, y: 700, width: 600, height: 50 }, // Start
      { x: 1000, y: 700, width: 400, height: 50 }, // Landing 1 (Gap 400px - Needs Jump+Dash)
      { x: 1800, y: 600, width: 400, height: 50 }, // Landing 2 (Gap 400px)
      { x: 2600, y: 500, width: 300, height: 50 }, // Sequence continues
      { x: 3400, y: 500, width: 1000, height: 50 }, // Long run for speed
      { x: 4800, y: 400, width: 200, height: 20 },
      { x: 5300, y: 400, width: 200, height: 20 }, // Dash Chain 1
      { x: 5800, y: 500, width: 200, height: 20 }, // Dash Chain 2
      { x: 6400, y: 600, width: 800, height: 50 }, // Big Landing
      { x: 7400, y: 600, width: 150, height: 20 }, // Precision Landing
      { x: 7800, y: 500, width: 300, height: 20 }, // Final Approach
    ],
    hazards: [
      { x: 600, y: 690, width: 400, height: 20 },
      { x: 1400, y: 690, width: 400, height: 20 },
      { x: 3800, y: 470, width: 50, height: 30 }, // Speed bump hazard
      { x: 4100, y: 470, width: 50, height: 30 },
      { x: 5000, y: 650, width: 1000, height: 30 }, // Long spike pit under dash chain
      { x: 7600, y: 650, width: 200, height: 50 },
    ],
    goal: { x: 8000, y: 420, width: 60, height: 80 },
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
      { x: 3000, y: 300, width: 50, height: 400 }, // Wall 3
      { x: 3200, y: 700, width: 200, height: 50 }, // Safety
      { x: 3600, y: 300, width: 50, height: 400 }, // Wall 4 (Double Glitch check)
      { x: 3900, y: 700, width: 800, height: 50 }, // Run
      { x: 5000, y: 200, width: 50, height: 1000 }, // The Final Great Wall
      { x: 5300, y: 700, width: 300, height: 50 }, // Final Landing
    ],
    hazards: [
      { x: 400, y: 670, width: 100, height: 30 }, // Hazard at wall base
      { x: 1900, y: 670, width: 100, height: 30 },
      { x: 2900, y: 670, width: 100, height: 30 },
      { x: 3500, y: 670, width: 100, height: 30 },
      { x: 4900, y: 670, width: 250, height: 30 }, // Hazard before Final Wall
    ],
    goal: { x: 5500, y: 620, width: 60, height: 80 },
  },
  4: {
    completed: false,
    name: "SECTOR 4",
    playerStart: { x: 100, y: 600 },
    platforms: [{ x: 0, y: 700, width: 1000, height: 50 }],
    hazards: [],
    goal: { x: 800, y: 620, width: 60, height: 80 },
  },
  5: {
    completed: false,
    name: "SECTOR 5",
    playerStart: { x: 100, y: 600 },
    platforms: [{ x: 0, y: 700, width: 1000, height: 50 }],
    hazards: [],
    goal: { x: 800, y: 620, width: 60, height: 80 },
  },
  6: {
    completed: false,
    name: "SECTOR 6",
    playerStart: { x: 100, y: 600 },
    platforms: [{ x: 0, y: 700, width: 1000, height: 50 }],
    hazards: [],
    goal: { x: 800, y: 620, width: 60, height: 80 },
  },
  7: {
    completed: false,
    name: "SECTOR 7",
    playerStart: { x: 100, y: 600 },
    platforms: [{ x: 0, y: 700, width: 1000, height: 50 }],
    hazards: [],
    goal: { x: 800, y: 620, width: 60, height: 80 },
  },
  8: {
    completed: false,
    name: "SECTOR 8",
    playerStart: { x: 100, y: 600 },
    platforms: [{ x: 0, y: 700, width: 1000, height: 50 }],
    hazards: [],
    goal: { x: 800, y: 620, width: 60, height: 80 },
  },
};
