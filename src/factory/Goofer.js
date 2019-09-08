export default class Goofer {
  constructor(rangeMin, rangeMax) {
    this.x = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;
    this.y = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;
  }

  getPosition() {
    return {
      x: this.x,
      y: this.y,
    }
  }
}
