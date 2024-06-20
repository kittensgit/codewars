// my variant

// const isSquare = (num) => Math.sqrt(num) === Math.floor(Math.sqrt(num));

//from comment

const isSquare = (num) => Number.isInteger(Math.sqrt(num));

console.log(isSquare(25));
