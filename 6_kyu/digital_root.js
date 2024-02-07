const digitalRoot = (num) => {
    const sum = String(num)
        .split('')
        .reduce((a, c) => a + Number(c), 0);
    if (sum < 10) {
        return sum;
    }
    return digitalRoot(sum);
};

console.log(digitalRoot(456));
