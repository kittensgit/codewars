const digPow = (n, p) => {
    const k =
        n
            .toString()
            .split('')
            .reduce(
                (acc, currVal, index) => acc + Math.pow(currVal, p + index),
                0
            ) / n;

    return Number.isInteger(k) ? k : -1;
};
console.log(digPow(89, 1));
