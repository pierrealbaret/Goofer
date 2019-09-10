export default class Goofer {
  constructor(rangeMin, rangeMax) {
    this.x = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;
    this.y = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;
    this.direction = 'up';
  }

  movePosition() {
    switch (this.direction) {
      case 'up':
        this.y = this.y -1;
        break;
      case 'down':
        this.y = this.y +1;
        break;
      case 'right':
        this.x = this.x + 1;
        break;
      case 'left':
        this.x = this.x - 1;
        break;
      default:
        break;
    }
  }

  getPosition() {
    return {
      x: this.x,
      y: this.y,
    }
  }
}
