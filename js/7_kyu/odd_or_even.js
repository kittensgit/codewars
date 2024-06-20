const oddOrEven = (arr) =>
    arr.reduce((acc, currVal) => acc + currVal, 0) % 2 === 0 ? 'even' : 'odd';

console.log(oddOrEven([0, 1, 4]));
