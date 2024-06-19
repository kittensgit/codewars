const duplicateCount = (str) =>
    Object.values(
        str
            .toLowerCase()
            .split('')
            .reduce((acc, currVal) => {
                acc[currVal] = (acc[currVal] || 0) + 1;
                return acc;
            }, {})
    ).filter((item) => item > 1).length;

console.log(duplicateCount('ABBA'));
