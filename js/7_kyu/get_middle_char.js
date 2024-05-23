const getMiddle = (s) => {
    if (s.length % 2 === 0) {
        let arr1 = s.slice(0, s.length / 2);
        let arr2 = s.slice(s.length / 2, s.length);
        return `${arr1[arr1.length - 1]}${arr2[0]}`;
    } else {
        return s[(s.length - 1) / 2];
    }
};

console.log(getMiddle('adfbc'));
