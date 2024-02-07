const filter_list = (arr) => arr.filter((item) => Number.isInteger(item));

console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));
