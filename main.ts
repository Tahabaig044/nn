// Import functions from rectangle.js
import { calculateArea, calculatePerimeter } from './rectangle.js';

// Calculate area and perimeter
const width = 5;
const height = 10;
const area = calculateArea(width, height);
const perimeter = calculatePerimeter(width, height);

// Print results
console.log(`Area: ${area}`);
console.log(`Perimeter: ${perimeter}`);




// Import Circle class
import { Circle } from './circle.js';

// Create an instance of Circle
const circle = new Circle(5);

// Print name and area
console.log(`Name: ${circle.name}`);
console.log(`Area: ${circle.calculateArea()}`);