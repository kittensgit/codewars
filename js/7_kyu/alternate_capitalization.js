const capitalize = (s) => {
    const result = ['', ''];
    for (let i = 0; i < s.length; i++) {
        result[0] += i % 2 === 0 ? s[i].toUpperCase() : s[i];
        result[1] += i % 2 === 1 ? s[i].toUpperCase() : s[i];
    }
    return result;
};

console.log(capitalize('adfdgf'));
