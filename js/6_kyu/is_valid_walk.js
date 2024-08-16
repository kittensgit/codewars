const isValidWalk = (walk) => {
    if (walk.length > 10 || walk.length < 10) return false;
    const obj = {
        n: 0,
        s: 0,
        w: 0,
        e: 0,
    };
    walk.forEach((el) => {
        obj[el] += 1;
    });
    return obj['n'] === obj['s'] && obj['w'] === obj['e'];
};

console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
