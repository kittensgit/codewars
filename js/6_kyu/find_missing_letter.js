const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

const findMissingLetter = (mas) => {
    const lowerMas = mas.map((item) => item.toLowerCase());
    const firstChar = alphabet.indexOf(lowerMas[0]);
    let missLetter = '';

    for (let i = 0; i < lowerMas.length; i++) {
        if (lowerMas[i] !== alphabet[firstChar + i]) {
            missLetter = alphabet[firstChar + i];
            return mas[0] === mas[0].toUpperCase()
                ? missLetter.toUpperCase()
                : missLetter;
        }
    }

    return missLetter;
};

console.log(findMissingLetter(['O', 'Q', 'R', 'S']));
