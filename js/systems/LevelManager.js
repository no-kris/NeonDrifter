import { GameState } from "../state.js";
import { levels } from "../data/levels.js";

class LevelManager {
  constructor() {
    this.currentLevel = 1;
  }

  loadLevel(levelIndex) {
    this.clearLevel();
    const data = levels[levelIndex];
    if (data) {
      GameState.platforms = data.platforms;
    }
  }

  clearLevel() {
    GameState.platforms = [];
    GameState.hazards = [];
    GameState.goal = null;
  }
}

export default LevelManager;
