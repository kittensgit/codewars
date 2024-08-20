const uniqueInOrder = (iterable) =>
    [...iterable].filter((item, index, array) => item !== array[index - 1]);

console.log(uniqueInOrder(['A', 'B', 'B', 'S', 'F', 'A']));
