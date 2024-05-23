const sumArray = (array) => {
    if (array && array.length > 1) {
        let sortedArray = [...array].sort((a, b) => a - b);
        let sum = 0;

        for (let i = 1; i < sortedArray.length - 1; i++) {
            sum += sortedArray[i];
        }
        return sum;
    }
    return 0;
};

console.log(sumArray([0, 1, 6, 10, 10]));
