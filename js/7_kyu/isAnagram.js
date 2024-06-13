const isAnagram = (test, original) => {
    const sorted = [test, original].map((item) =>
        item
            .toLowerCase()
            .split('')
            .sort((l1, l2) => l1.localeCompare(l2))
            .join('')
    );
    return sorted[0] === sorted[1];
};

console.log(isAnagram('foefet', 'toffee'));
