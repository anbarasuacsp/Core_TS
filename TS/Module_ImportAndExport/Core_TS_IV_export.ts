// Module Import/Export Syntax in TypeScript
//1. Named Exports

// Simple function syntax
export function add1(a: number, b: number): number {
    return a + b;
}  

export const add = (a: number, b: number) => a + b;

export const sub = (a: number, b: number) => a - b;

// Default Export

export default function multiply(a: number, b: number): number {
    return a * b;
}
// Export List

const pi = 31.4;
const square = (x: number) => x * x;
export { pi, square };

// Import Named Export


