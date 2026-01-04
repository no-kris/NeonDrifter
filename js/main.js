import { CONSTANTS } from "./constant.js";
import Particle from "./entities/Particle.js";
import { GameState } from "./state.js";
import Camera from "./systems/Camera.js";
import GameSystem from "./systems/GameSystem.js";
import InputSystem from "./systems/InputSystem.js";
import LevelManager from "./systems/LevelManager.js";
import ThemesSettings from "./themes.js";
import { levels } from "./data/levels.js";

const mainMenu = document.getElementById("main-menu");
const uiLayer = document.getElementById("ui-layer");
const menuBtn = document.querySelector(".menu-button");
const themeButton = document.getElementById("theme-btn");
const glitchBar = document.getElementById("glitch-bar");
const levelContainer = document.getElementById("level-select-container");

const game = new GameSystem("game-canvas");
const levelManager = new LevelManager();
const inputSystem = new InputSystem();
const camera = new Camera(window.innerWidth, window.innerHeight, 0.6);
ThemesSettings.init();
let respawnTimer = 0;

let animationId = null;

window.addEventListener("resize", () => {
  camera.width = window.innerWidth;
  camera.height = window.innerHeight;
});

function initLevelMenu() {
  levelContainer.innerHTML = "";
  Object.keys(levels).forEach((key) => {
    const btn = document.createElement("button");
    btn.innerText = `LEVEL ${key}: ${levels[key].name}`;
    btn.classList.add("button", "play-button", "btn-hover");
    if (levels[key].completed) {
      btn.classList.add("btn-completed");
    }
    btn.addEventListener("click", () => {
      mainMenu.classList.add("hidden");
      uiLayer.classList.remove("hidden");
      startGame(parseInt(key));
    });
    levelContainer.appendChild(btn);
  });
}

initLevelMenu();

function startGame() {
  if (animationId) cancelAnimationFrame(animationId);
  levelManager.loadLevel(1);
  gameLoop();
}

function stopGame() {
  if (animationId) cancelAnimationFrame(animationId);
  GameState.player = null;
  GameState.platforms = [];
  GameState.hazards = [];
  GameState.particles = [];
  GameState.goal = null;
}

function showMenu() {
  uiLayer.classList.add("hidden");
  mainMenu.classList.remove("hidden");
  stopGame();
}

function gameLoop() {
  if (GameState.player) {
    GameState.player.update(inputSystem);
    camera.update(GameState.player);
    const pct =
      (GameState.player.glitchCharge / CONSTANTS.GLITCH_THRESHOLD) * 100;
    glitchBar.style.width = `${pct}%`;
    glitchBar.style.opacity = Math.min(1, pct / 50 + 0.5);
    updateParticles();
    // Check for death
    if (GameState.player.dead) {
      if (respawnTimer === 0) respawnTimer = 30;
      respawnTimer--;
      if (respawnTimer <= 0) {
        levelManager.loadLevel(levelManager.currentLevel);
        camera.x = 0;
        camera.y = 0;
        respawnTimer = 0;
        return requestAnimationFrame(gameLoop);
      }
    }
    // Check if player has completed level
    if (GameState.player.hasWon) {
      showMenu();
      return;
    }
    // Add camera recoil when the player glitches
    if (GameState.player.justGlitched) {
      Particle.spawnParticles(GameState.player.x, GameState.player.y);
      camera.recoil(10);
      GameState.player.justGlitched = false;
    }
  }
  game.draw(camera);
  animationId = requestAnimationFrame(gameLoop);
}

function updateParticles() {
  for (let i = GameState.particles.length - 1; i >= 0; i--) {
    const particle = GameState.particles[i];
    particle.update();
    if (particle.dead) {
      GameState.particles.splice(i, 1);
    }
  }
}

menuBtn.addEventListener("click", () => {
  showMenu();
});

themeButton.addEventListener("click", () => {
  ThemesSettings.toggle();
});
