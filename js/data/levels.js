import ThemesSettings from "../themes.js";

const colors = ThemesSettings.themes[ThemesSettings.currentIndex].colors;

export const levels = {
  1: {
    name: "Genesis",
    playerStart: { x: 100, y: 600 },
    platforms: [
      { x: 0, y: 700, width: 900, height: 50, color: colors.secondary },
      { x: 450, y: 580, width: 200, height: 20, color: colors.secondary },
      { x: 1250, y: 700, width: 800, height: 50, color: colors.secondary },
      { x: 2100, y: 600, width: 150, height: 20, color: colors.secondary },
      { x: 2400, y: 500, width: 150, height: 20, color: colors.secondary },
      { x: 2100, y: 400, width: 150, height: 20, color: colors.secondary },
      { x: 2400, y: 300, width: 800, height: 20, color: colors.secondary },
      { x: 3300, y: 500, width: 200, height: 20, color: colors.secondary },
      { x: 3600, y: 650, width: 200, height: 20, color: colors.secondary },
      { x: 4000, y: 650, width: 1000, height: 50, color: colors.secondary },
      { x: 5200, y: 550, width: 150, height: 20, color: colors.secondary },
      { x: 5450, y: 450, width: 300, height: 20, color: colors.secondary },
    ],
    hazards: [
      { x: 700, y: 670, width: 150, height: 30, color: colors.hazard },
      { x: 2600, y: 270, width: 100, height: 30, color: colors.hazard },
      { x: 2900, y: 270, width: 100, height: 30, color: colors.hazard },
      { x: 4200, y: 620, width: 100, height: 30, color: colors.hazard },
      { x: 4500, y: 620, width: 100, height: 30, color: colors.hazard },
      { x: 4800, y: 550, width: 50, height: 100, color: colors.hazard },
    ],
    goal: { x: 5600, y: 370, width: 60, height: 80, color: colors.goal },
  },
};
