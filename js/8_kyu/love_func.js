const lovefunc = (f1, f2) =>
    (f1 % 2 === 0 && f2 % 2 !== 0) || (f1 % 2 !== 0 && f2 % 2 === 0);

console.log(lovefunc(2, 2));
