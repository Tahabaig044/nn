// Import Shape interface
import { Shape } from './shape.js';

// Define and export Circle class
export class Circle implements Shape {
  name: string;
  area: number;

  constructor(radius: number) {
    this.name = 'Circle';
    this.area = radius;
  }

  calculateArea(): number {
    return Math.PI * this.area ** 2;
  }
}