const sumSquareEvenRootOdd = (ns) =>
    +ns
        .reduce(
            (acc, curr) =>
                acc + (curr % 2 === 0 ? curr * curr : Math.sqrt(curr)),
            0
        )
        .toFixed(2);

console.log(sumSquareEvenRootOdd([4, 6, 7, 9]));
