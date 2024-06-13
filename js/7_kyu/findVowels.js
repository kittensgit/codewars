// my solution

const findVowels = (str) => {
    const vowels = ['a', 'e', 'o', 'i', 'u'];
    let count = 0;
    str.split('').forEach((item) => {
        if (vowels.includes(item)) {
            count += 1;
        }
    });
    return count;
};

console.log(findVowels('why'));

// solution from comments

const findCount = (str) =>
    str.split('').filter((letter) => 'aeoiuAEOIU'.includes(letter)).length;

console.log(findCount('hello'));
