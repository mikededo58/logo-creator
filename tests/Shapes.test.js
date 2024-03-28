const Shape = require("../lib/Shape");
const Triangle = require("../lib/Triangle");
const Circle = require("../lib/'");
const Square = require("../lib/Square");

describe("Shape", () => {
  it("Should test the the shape to make sure it is returning a triangle in the appropriate color", () => {
    const shape = new Triangle();
    const color = ("blue");
    exptect (shape.render()).toEqual(`<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill="${color}" />`);
  });
});

describe("Shape", () => {
    it("Should test the the shape to make sure it is returning a circle in the appropriate color", () => {
      const shape = new Circle();
      const color = ("blue");
      exptect (shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill=" fill="${color}" />`);
    });
  });

  describe("Shape", () => {
    it("Should test the the shape to make sure it is returning a Square in the appropriate color", () => {
      const shape = new Square();
      const color = ("blue");
      exptect (shape.render()).toEqual(`<rect x="10" y="10" width="230" height="230"fill="${color}" />`);
    });
  });