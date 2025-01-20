function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error("Invalid input: Both arguments must be numbers or parseable as numbers.");
  }
  return numA + numB;
}

let result1 = add(1, 2); // Correct: 3
let result2 = addSafe(1, "2"); // Correct: 3
let result3 = addSafe("1", "2"); // Correct: 3

//This will throw an error because of invalid input
//let result4 = addSafe("a", "2"); // Throws an Error