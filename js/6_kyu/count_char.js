const count = (str) =>
    str.split('').reduce((acc, currVal) => {
        acc[currVal] = (acc[currVal] || 0) + 1;
        return acc;
    }, {});

console.log(count('aabk'));
