const reverseWords = (str: string): string =>
    str
        .split(' ')
        .map((item) => item.split('').reverse().join(''))
        .join(' ');

console.log(reverseWords('Got It'));
