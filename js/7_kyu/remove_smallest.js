const removeSmallest = (arr) =>
    arr.filter((_, index) => index !== arr.indexOf(Math.min(...arr)));

console.log(removeSmallest([1, 243, 3434, 3]));
