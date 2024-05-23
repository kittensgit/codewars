const countPositivesSumNegatives = (array) => {
    let countPositive = 0;
    let sum = 0;
    if (array) {
        array.reduce(
            (_, currVal) =>
                currVal > 0 ? (countPositive += 1) : (sum += currVal),
            0
        );
    }
    if (sum || countPositive) {
        return [countPositive, sum];
    } else {
        return [];
    }
};

console.log(countPositivesSumNegatives([0, 0]));
