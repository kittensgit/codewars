// const longest = (a, b) =>
//     [...new Set(a.split('').concat(b.split('')).sort())].join('');

// best practice

const longest = (a, b) => [...new Set(a + b)].sort().join('');

console.log(longest('absd', 'fwedddaager'));
