const Shape = require("./Shape");

class Circle extends Shape {
  constructor() {
    super();
    this.shapeText = "";
  }
  render() {
    this.shapeText = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    return this.shapeText;
  }
}

module.exports = Circle;
