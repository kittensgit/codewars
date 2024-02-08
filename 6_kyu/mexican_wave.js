const wave = (str) => {
    const result = [];
    for (let i = 0; i < str.length; i++) {
        if (
            (str[i] >= 'a' && str[i] <= 'z') ||
            (str[i] >= 'A' && str[i] <= 'Z')
        ) {
            result.push(
                str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1)
            );
        }
    }
    return result;
};

console.log(wave('Two words'));

// [
//     'Two words',
//     'TWo words',
//     'TwO words',
//     'Two Words',
//     'Two wOrds',
//     'Two woRds',
//     'Two worDs',
//     'Two wordS'
// ]
