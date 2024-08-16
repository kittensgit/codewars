const countSheeps = (sheeps) =>
    sheeps.reduce((acc, currVal) => (currVal ? acc + 1 : acc + 0), 0);

console.log(countSheeps([null]));
