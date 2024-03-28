const Shape = require("./Shape");

class Square extends Shape {
  constructor() {
    super();
    this.shapeText = "";
  }
  render() {
    this.shapeText = `<rect x="10" y="10" width="230" height="230" fill="${this.color}" />`;
    return this.shapeText;
  }
}
module.exports = Square;
