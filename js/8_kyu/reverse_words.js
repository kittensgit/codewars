const reverseWords = (str) =>
    str
        .split(' ')
        .map((item) => item.split('').reverse().join(''))
        .join(' ');
