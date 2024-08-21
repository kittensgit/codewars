const strCount = (str, letter) =>
    str.split('').filter((l) => l === letter).length;

console.log(strCount('Hello', 'o'));
