const Triangle = require('./Triangle.js');
const Square = require('./Square.js');
const Circle = require('./Circle.js');

describe('Triangle Color', () => {
    const triangle = new Triangle();
    triangle.setShapeColor(shapeColor);
    expect(triangle.color).toEqual(shapeColor);
})

describe('Square Color', () => {
    const square = new Square();
    square.setShapeColor(shapeColor);
    expect(square.color).toEqual(shapeColor);
})

describe('Circle Color', () => {
    const circle = new Circle();
    circle.setShapeColor(shapeColor);
    expect(circle.color).toEqual(shapeColor);
})