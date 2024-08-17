const isPangram = (str) => {
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    const alphabetObj = {};

    for (let char of alphabet) {
        alphabetObj[char] = 0;
    }

    str.toLowerCase()
        .split('')
        .forEach((char) => {
            if (alphabetObj.hasOwnProperty(char)) {
                alphabetObj[char] += 1;
            }
        });

    return Object.values(alphabetObj).every(Boolean);
};

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
