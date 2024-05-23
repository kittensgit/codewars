const vaporcode = (string) =>
    string
        .toUpperCase()
        .split('')
        .filter((str) => str !== ' ')
        .join('  ');

console.log(vaporcode("Why isn't my code working"));
