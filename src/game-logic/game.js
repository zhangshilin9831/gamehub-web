export default class Game {
  constructor({ platform }) {
    this.platform = platform;
    this.state = { score: 0, player: { x: 10, y: 10 } };
  }

  update(input) {
    // Will be implemented later
        if(input.left) this.state.player.x -=1
        if(input.right) this.state.player.x +=1
        if(input.up) this.state.player.y -=1
        if(input.down) this.state.player.y +=1
  }

  getState() {
    return this.state;
  }
}
