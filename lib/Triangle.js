const Shape = require("./Shape");

class Triangle extends Shape {
  constructor() {
    super();
    this.shapeText = "";
  }
  render() {
    this.shapeText = `<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill="${this.color}" />`;
    return this.shapeText;
  }
}
module.exports = Triangle;
