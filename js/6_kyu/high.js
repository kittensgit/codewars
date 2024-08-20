const high = (str) => {
    const splittedStr = str.split(' ');
    const scores = splittedStr.map((item) =>
        item
            .split('')
            .map((item) => [...'abcdefghijklmnopqrstuvwxyz'].indexOf(item) + 1)
            .reduce((acc, currVal) => acc + +currVal, 0)
    );
    return splittedStr[scores.indexOf(Math.max(...scores))];
};

console.log(high('man i need a taxi up to ubud'));
