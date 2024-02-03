const arrayPlusArray = (arr1, arr2) =>
    [...arr1, ...arr2].reduce((acc, currVal) => acc + currVal);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
