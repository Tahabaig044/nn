"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
// Define and export Circle class
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.name = 'Circle';
        this.area = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.area, 2);
    };
    return Circle;
}());
exports.Circle = Circle;
