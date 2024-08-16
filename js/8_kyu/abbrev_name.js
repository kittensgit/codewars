const abbrevName = (name) =>
    name
        .split(' ')
        .map((item) => item.charAt(0).toUpperCase())
        .join('.');

console.log(abbrevName('Som Somi'));
