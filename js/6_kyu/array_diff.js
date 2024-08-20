const arrayDiff = (a, b) => a.filter((item) => !b.includes(item));

console.log(arrayDiff([1, 2, 2], [2, 1]));
