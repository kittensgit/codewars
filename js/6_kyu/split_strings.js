const solution = (str) => {
    const sliced_array = [];
    for (let i = 0; i < str.length; i += 2) {
        sliced_array.push(str.slice(i, i + 2));
    }
    return sliced_array.map((item) => (item.length < 2 ? `${item}_` : item));
};

console.log(solution('abcds'));
