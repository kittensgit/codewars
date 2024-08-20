const solution = (str) =>
    str
        .split('')
        .map((item) => (item === item.toUpperCase() ? ' ' + item : item))
        .join('');

console.log(solution('sdfds'));
