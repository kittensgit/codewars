// const solution = (str, ending) =>
//     str.slice(str.length - ending.length).includes(ending);

// best practice
const solution = (str, ending) => str.endsWith(ending);

console.log(solution('abcde', 'cde'));
