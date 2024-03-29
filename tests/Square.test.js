const Square = require("../lib/Square");

describe("Shape", () => {
  test("Should test the the shape to make sure it is returning a Square in the appropriate color", () => {
    const expectedShape = `<rect x="10" y="10" width="230" height="230" fill="blue" />`;
    const shapeTest = new Square();
    shapeTest.setColor("blue");
    expect(shapeTest.render()).toEqual(expectedShape);
  });
});
