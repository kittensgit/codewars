const isValidWalk = (walk) => {
    if (walk.length !== 10) return false;
    const counts = {
        n: 0,
        s: 0,
        w: 0,
        e: 0,
    };
    walk.forEach((el) => counts[el]++);
    return counts['n'] === counts['s'] && counts['w'] === counts['e'];
};

console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
