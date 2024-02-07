const isIsogram = (str) =>
    [...new Set(str.toLowerCase())].length ===
    str.toLowerCase().split('').length;

console.log(isIsogram('moOse'));
