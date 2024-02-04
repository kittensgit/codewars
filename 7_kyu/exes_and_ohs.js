const XO = (str) => {
    let string = str.toLowerCase();
    let countO = 0;
    let countX = 0;

    if (string.includes('o')) {
        countO = Array.from(string).reduce((accumulator, currVal) => {
            return accumulator + (currVal === 'o' ? 1 : 0);
        }, 0);
    }

    if (string.includes('x')) {
        countX = Array.from(string).reduce((accumulator, currVal) => {
            return accumulator + (currVal === 'x' ? 1 : 0);
        }, 0);
    }

    return countO === countX;
};

console.log(XO('zpzpzpp'));
