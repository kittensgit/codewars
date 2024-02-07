const createPhoneNumber = (numbers) =>
    numbers.reduce((acc, curr) => acc.replace('x', curr), '(xxx) xxx-xxxx');

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
