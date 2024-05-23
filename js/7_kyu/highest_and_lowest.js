const highAndLow = (numbers) => {
    let numbersArr = numbers.split(' ');
    return `${Math.max(...numbersArr)} ${Math.min(...numbersArr)}`;
};

console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'));
