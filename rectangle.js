"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePerimeter = exports.calculateArea = void 0;
// Define and export functions
function calculateArea(width, height) {
    return width * height;
}
exports.calculateArea = calculateArea;
function calculatePerimeter(width, height) {
    return 2 * (width + height);
}
exports.calculatePerimeter = calculatePerimeter;
