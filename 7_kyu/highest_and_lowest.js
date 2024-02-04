const highAndLow = (numbers) => {
    let arr = [];
    if (numbers) {
        numbers.split(' ').reduce((_, currVal) => arr.push(+currVal), 0);
    }
    arr.sort((a, b) => a - b);
    return `${arr[arr.length - 1]} ${arr[0]}`;
};

console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'));
