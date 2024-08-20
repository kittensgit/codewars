const findEvenIndex = (arr) =>
    arr.findIndex(
        (_, index) =>
            arr.slice(0, index).reduce((acc, currVal) => acc + currVal, 0) ===
            arr.slice(index + 1).reduce((acc, currVal) => acc + currVal, 0)
    );

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
