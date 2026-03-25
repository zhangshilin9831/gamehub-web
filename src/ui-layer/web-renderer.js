export default class Renderer {
  constructor(appElement) {
    this.appElement = appElement;
    this.appElement.innerHTML = `
      <div id="game-container"></div>
      <div id="score">Score: 0</div>
    `;
    this.gameContainer = document.getElementById('game-container');
    this.scoreElement = document.getElementById('score');
    this.input = { left: false, right: false, up: false, down: false };

    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.input.left = true;
      if (e.key === 'ArrowRight') this.input.right = true;
      if (e.key === 'ArrowUp') this.input.up = true;
      if (e.key === 'ArrowDown') this.input.down = true;
    });

    window.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowLeft') this.input.left = false;
      if (e.key === 'ArrowRight') this.input.right = false;
      if (e.key === 'ArrowUp') this.input.up = false;
      if (e.key === 'ArrowDown') this.input.down = false;
    });
  }

  getInput() {
    return this.input;
  }

  render(state) {
    this.scoreElement.innerText = `Score: ${state.score}`;
    // This is a very basic renderer. We will improve it later
    this.gameContainer.innerHTML = `<div class="player" style="left: ${state.player.x}px; top: ${state.player.y}px"></div>`;
  }
}
