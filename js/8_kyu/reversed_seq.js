const reverseSeq = (n) =>
    Array(n)
        .fill(0)
        .map((_, index) => index + 1)
        .reverse();

console.log(reverseSeq(10));
