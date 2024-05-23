const findOutlier = (integers) => {
    const even = integers.filter((el) => el % 2 === 0);
    const odd = integers.filter((el) => el % 2 !== 0);
    return even.length === 1 ? even[0] : odd[0];
};

console.log(findOutlier([1, 1, 0, 1, 1]));
