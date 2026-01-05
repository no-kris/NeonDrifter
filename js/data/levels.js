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
    name: "PRECISION",
    playerStart: { x: 100, y: 600 },
    platforms: [
      { x: 0, y: 700, width: 400, height: 50 }, // Start
      { x: 500, y: 650, width: 60, height: 20 }, // Tiny platform 1
      { x: 800, y: 600, width: 60, height: 20 }, // Tiny platform 2
      { x: 1100, y: 550, width: 60, height: 20 }, // Tiny platform 3
      { x: 1400, y: 650, width: 60, height: 20 }, // Dip
      { x: 1800, y: 700, width: 400, height: 50 }, // SAFE POINT
      { x: 2300, y: 600, width: 50, height: 20 }, // Tiny 4
      { x: 2600, y: 500, width: 50, height: 20 }, // Tiny 5
      { x: 3000, y: 670, width: 200, height: 20 }, // Low Safe
      { x: 3400, y: 600, width: 50, height: 20 }, // Tiny 6
      { x: 3800, y: 500, width: 50, height: 20 }, // Tiny 7
      { x: 4200, y: 650, width: 300, height: 50 }, // Final Approach
    ],
    hazards: [
      { x: 400, y: 680, width: 1400, height: 20 }, // Floor is lava
      { x: 2200, y: 680, width: 2000, height: 20 }, // Floor is lava 2
    ],
    goal: { x: 4400, y: 570, width: 60, height: 80 },
  },
  5: {
    completed: false,
    name: "THE TOWER",
    playerStart: { x: 100, y: 900 },
    platforms: [
      { x: 0, y: 1000, width: 1000, height: 50 }, // Base
      { x: 800, y: 850, width: 200, height: 20 }, // Step 1
      { x: 600, y: 700, width: 200, height: 20 }, // Step 2 (Left)
      { x: 900, y: 550, width: 200, height: 20 }, // Step 3 (Right)
      { x: 500, y: 400, width: 200, height: 20 }, // Step 4 (Left)
      { x: 800, y: 250, width: 200, height: 20 }, // Step 5
      { x: 400, y: 100, width: 600, height: 50 }, // Checkpoint 1
      { x: 800, y: -50, width: 150, height: 20 }, // Upper Step 1
      { x: 500, y: -200, width: 150, height: 20 }, // Upper Step 2
      { x: 800, y: -350, width: 200, height: 20 }, // Upper Step 3
      { x: 400, y: -500, width: 600, height: 50 }, // Top
    ],
    hazards: [
      { x: 400, y: 970, width: 100, height: 30 }, // Base Hazard
      { x: 0, y: 1100, width: 2000, height: 50 }, // Fall death
    ],
    goal: { x: 600, y: -580, width: 60, height: 80 },
  },
  6: {
    completed: false,
    name: "GAUNTLET",
    playerStart: { x: 100, y: 600 },
    platforms: [
      { x: 0, y: 700, width: 500, height: 50 }, // Start
      { x: 600, y: 700, width: 2000, height: 50 }, // The Gauntlet Floor
      { x: 2700, y: 600, width: 400, height: 50 }, // Checkpoint
      { x: 3200, y: 600, width: 1200, height: 50 }, // Gauntlet Part 2
      { x: 4500, y: 500, width: 400, height: 50 }, // Finish Platform
    ],
    hazards: [
      { x: 700, y: 670, width: 50, height: 30 },
      { x: 900, y: 670, width: 50, height: 30 },
      { x: 1100, y: 670, width: 50, height: 30 },
      { x: 1300, y: 620, width: 50, height: 80 }, // High spike
      { x: 1500, y: 670, width: 50, height: 30 },
      { x: 1700, y: 620, width: 50, height: 80 }, // High spike
      { x: 1900, y: 670, width: 50, height: 30 },
      { x: 2100, y: 670, width: 300, height: 30 }, // Long finish
      { x: 3300, y: 570, width: 50, height: 30 }, // Part 2 Spikes
      { x: 3500, y: 520, width: 50, height: 80 },
      { x: 3700, y: 570, width: 50, height: 30 },
      { x: 3900, y: 520, width: 50, height: 80 },
      { x: 4100, y: 570, width: 200, height: 30 },
    ],
    goal: { x: 4700, y: 420, width: 60, height: 80 },
  },
  7: {
    completed: false,
    name: "THE VOID",
    playerStart: { x: 100, y: 600 },
    platforms: [
      { x: 0, y: 700, width: 300, height: 50 },
      { x: 600, y: 600, width: 100, height: 20 }, // Floating Island
      { x: 1000, y: 700, width: 100, height: 20 }, // Floating Island
      { x: 1600, y: 600, width: 100, height: 20 }, // Dash Jump
      { x: 2200, y: 500, width: 100, height: 20 }, // Dash Jump High
      { x: 2800, y: 600, width: 500, height: 50 }, // Landing
    ],
    hazards: [],
    goal: { x: 3100, y: 520, width: 60, height: 80 },
  },
  8: {
    completed: false,
    name: "DRIFT",
    playerStart: { x: 100, y: 600 },
    platforms: [
      { x: 0, y: 700, width: 800, height: 50 },
      { x: 800, y: 650, width: 60, height: 20 }, // Tiny precision
      { x: 1200, y: 600, width: 60, height: 20 }, // Tiny precision
      { x: 1600, y: 700, width: 400, height: 50 }, // Dash Landing
      { x: 2200, y: 400, width: 50, height: 400 }, // Glitch Wall
      { x: 2500, y: 700, width: 600, height: 50 }, // Hazard Run
      { x: 3200, y: 600, width: 50, height: 300 }, // Wall 2
      { x: 3400, y: 700, width: 800, height: 50 }, // Sprint
      { x: 4400, y: 600, width: 100, height: 20 }, // Floating
      { x: 4800, y: 500, width: 100, height: 20 }, // Floating
      { x: 5200, y: 600, width: 400, height: 50 }, // Finish
    ],
    hazards: [
      { x: 2600, y: 670, width: 100, height: 30 },
      { x: 2800, y: 670, width: 100, height: 30 },
      { x: 3000, y: 670, width: 100, height: 30 },
      { x: 3800, y: 670, width: 200, height: 30 },
      { x: 4100, y: 620, width: 50, height: 80 },
    ],
    goal: { x: 5400, y: 520, width: 60, height: 80 },
  },
};
