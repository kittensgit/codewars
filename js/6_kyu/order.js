// const order = (words) => {
//     if (!words.length) return '';

//     const wordsArray = words.split(' ');

//     const wordsOrder = Array(wordsArray.length).fill(0);

//     for (let i = 0; i < wordsArray.length; i++) {
//         const word = wordsArray[i].split('').sort();
//         wordsOrder[Number(word[0] - 1)] = wordsArray[i];
//     }

//     return wordsOrder.join(' ');
// };

// best practice

const order = (words) =>
    words
        .split(' ')
        .sort((a, b) => a.match(/\d/) - b.match(/\d/))
        .join(' ');

console.log(order('is2 Thi1s T4est 3a'));
