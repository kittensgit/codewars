const accum = (str) =>
    str
        .toUpperCase()
        .split('')
        .map(
            (item, index) =>
                `${item}${item
                    .repeat(index + 1)
                    .slice(1)
                    .toLowerCase()}`
        )
        .join('-');

console.log(accum('ansf'));
