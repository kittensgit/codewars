const squareSum = (arr) =>
    arr.reduce((acc, currVal) => acc + Math.pow(currVal, 2), 0);

console.log(squareSum([1, 2, 2]));
