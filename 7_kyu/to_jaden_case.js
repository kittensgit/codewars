const toJadenCase = (str) =>
    str
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
