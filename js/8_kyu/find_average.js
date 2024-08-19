const findAverage = (nums) =>
    nums.reduce((acc, currVal) => acc + currVal, 0) / nums.length;

console.log(findAverage([1, 2, 3]));
