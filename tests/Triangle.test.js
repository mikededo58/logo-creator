const Triangle = require("../lib/Triangle");

describe("Triangle", () => {
  test("Should test the the shape to make sure it is returning a triangle in the appropriate color", () => {
    const expectedShape = `<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill="blue" />`;
    const shapeTest = new Triangle();
    shapeTest.setColor("blue");
    expect(shapeTest.render()).toEqual(expectedShape);
  });
});
