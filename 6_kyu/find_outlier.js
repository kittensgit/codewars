const findOutlier = (integers) => {
    const even = [];
    const odd = [];
    integers.filter((el) => (el % 2 === 0 ? even.push(el) : odd.push(el)));
    if (even.length > odd.length) {
        return +odd.join('');
    } else {
        return +even.join('');
    }
};

console.log(findOutlier([1, 1, 0, 1, 1]));
