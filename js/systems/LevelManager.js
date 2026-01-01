import { GameState } from "../state.js";
import { levels } from "../data/levels.js";
import Player from "../entities/Player.js";

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
    if (data.playerStart) {
      GameState.player = new Player(data.playerStart.x, data.playerStart.y);
    }
  }

  clearLevel() {
    GameState.platforms = [];
    GameState.hazards = [];
    GameState.goal = null;
  }
}

export default LevelManager;
