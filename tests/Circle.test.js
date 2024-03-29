const Circle = require("../lib/Circle");

describe("Circle", () => {
  test("Should test the the shape to make sure it is returning a circle in the appropriate color", () => {
    const expectedShape = `<circle cx="150" cy="100" r="80" fill="blue" />`;
    const shapeTest = new Circle();
    shapeTest.setColor("blue");
    expect(shapeTest.render()).toEqual(expectedShape);
  });
});
