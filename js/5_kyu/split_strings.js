const firstNonRepeatingLetter = (str) => {
    const charCount = str
        .toLowerCase()
        .split('')
        .reduce((acc, currVal) => {
            acc[currVal] = (acc[currVal] || 0) + 1;
            return acc;
        }, {});

    return (
        str.split('').find((char) => charCount[char.toLowerCase()] === 1) || ''
    );
};

console.log(firstNonRepeatingLetter('aabb'));
