
import Game from './game-logic/game.js';
import Renderer from './ui-layer/web-renderer.js';
import { createWebAdapter } from './platform-adapter/web-adapter.js';

const platform = createWebAdapter();
const game = new Game({ platform });
const renderer = new Renderer(document.getElementById('app'));

function gameLoop() {
  // 1. 从 UI 层获取输入
  const input = renderer.getInput();

  // 2. 更新游戏逻辑
  game.update(input);

  // 3. 获取最新状态并渲染
  const state = game.getState();
  renderer.render(state);

  requestAnimationFrame(gameLoop);
}

gameLoop();
