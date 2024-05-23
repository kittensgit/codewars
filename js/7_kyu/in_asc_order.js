const inAscOrder = (arr) =>
    [...arr].sort((a, b) => a - b).every((item, index) => item == arr[index]);

console.log(inAscOrder([1, 6, 10]));
