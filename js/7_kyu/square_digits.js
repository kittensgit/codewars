const squareDigits = (num) =>
    +num
        .toString()
        .split('')
        .map((item) => item * item)
        .join('');

console.log(squareDigits(9119));
