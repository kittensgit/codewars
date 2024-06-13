const capitals = (string) =>
    string
        .split('')
        .map((item, index) => item === item.toUpperCase() && index)
        .filter((item) => item !== false);

console.log(capitals('CodEWaRs'));
