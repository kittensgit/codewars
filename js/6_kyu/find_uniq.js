// my variant(bad)

// const findUniq = (arr) =>
//     +Object.entries(
//         arr.reduce((acc, currVal) => {
//             acc[currVal] = (acc[currVal] || 0) + 1;
//             return acc;
//         }, {})
//     ).find((item) => item[1] === 1)[0];

// best practice

const findUniq = (arr) => {
    arr.sort();
    return arr[0] === arr[1] ? arr.pop() : arr[0];
};

console.log(findUniq([1, 2, 1]));
