const countSheep = (count) =>
    count >= 1
        ? Array(count)
              .fill('')
              .map((_, index) => `${index + 1} sheep...`)
              .join('')
        : '';

console.log(countSheep(1));
