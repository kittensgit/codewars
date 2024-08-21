const doubleChar = (str) =>
    str
        .split('')
        .map((item) => item.repeat(2))
        .join('');

console.log(doubleChar('hello'));
