"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import functions from rectangle.js
var rectangle_js_1 = require("./rectangle.js");
// Calculate area and perimeter
var width = 5;
var height = 10;
var area = (0, rectangle_js_1.calculateArea)(width, height);
var perimeter = (0, rectangle_js_1.calculatePerimeter)(width, height);
// Print results
console.log("Area: ".concat(area));
console.log("Perimeter: ".concat(perimeter));
// Import Circle class
var circle_js_1 = require("./circle.js");
// Create an instance of Circle
var circle = new circle_js_1.Circle(5);
// Print name and area
console.log("Name: ".concat(circle.name));
console.log("Area: ".concat(circle.calculateArea()));
