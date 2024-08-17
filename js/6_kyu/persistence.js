const persistence = (num) => {
    let count = 0;

    while (num.toString().length > 1) {
        num = num
            .toString()
            .split('')
            .reduce((acc, currVal) => acc * Number(currVal));
        count++;
    }

    return count;
};

console.log(persistence(39));
