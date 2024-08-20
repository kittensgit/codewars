const narcissistic = (num) =>
    num ===
    num
        .toString()
        .split('')
        .reduce(
            (acc, currVal, _, array) =>
                acc + Math.pow(Number(currVal), array.length),
            0
        );

console.log(narcissistic(153));
