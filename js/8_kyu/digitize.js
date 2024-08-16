const digitize = (num) =>
    num
        .toString()
        .split('')
        .map((item) => +item)
        .reverse();

console.log(digitize(35231));
