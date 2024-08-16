const countBits = (num) =>
    num
        .toString(2)
        .split('')
        .filter((item) => +item).length;

console.log(countBits(12));
