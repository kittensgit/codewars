const number = (busStop) =>
    busStop.reduce((acc, currVal) => acc + currVal[0] - currVal[1], 0);

console.log(
    number([
        [10, 0],
        [3, 5],
        [5, 8],
    ])
);
