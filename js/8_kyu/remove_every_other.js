const removeEveryOther = (arr) => arr.filter((_, index) => index % 2 === 0);

console.log(removeEveryOther([1, 2, 3, 4, 5]));
