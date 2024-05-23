const digitalRoot = (num) =>
    num < 10
        ? num
        : digitalRoot(
              String(num)
                  .split('')
                  .reduce((a, c) => a + Number(c), 0)
          );

console.log(digitalRoot(456));
