const sumTwoSmallestNumbers = (arr) => {
    const sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[0] + sortedArr[1];
};

console.log(sumTwoSmallestNumbers([1, 23, 4, 5]));
