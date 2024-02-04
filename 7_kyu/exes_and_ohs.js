const XO = (str) => {
    let string = Array.from(str.toLowerCase());
    return (
        string.filter((item) => item === 'x').length ===
        string.filter((item) => item === 'o').length
    );
};

console.log(XO('xxfdooo'));
