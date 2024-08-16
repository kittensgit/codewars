// const duplicateEncode = (str) => {
//     const splitStr = str.toLowerCase().split('');
//     const countChar = splitStr.reduce((acc, currVal) => {
//         acc[currVal] = (acc[currVal] || 0) + 1;
//         return acc;
//     }, {});
//     return splitStr.map((item) => (countChar[item] > 1 ? ')' : '(')).join('');
// };

// best practice
const duplicateEncode = (str) =>
    str
        .toLowerCase()
        .split('')
        .map((item, _, array) =>
            array.indexOf(item) === array.lastIndexOf(item) ? '(' : ')'
        )
        .join('');

console.log(duplicateEncode('Success'));
