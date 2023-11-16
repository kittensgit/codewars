function stringParse(input) {
    if (typeof input !== 'string') {
        return 'Please enter a valid string';
    }

    if (/\d/.test(input)) {
        return 'Please enter a valid string';
    }

    if (input.length === 0) {
        return ''; // Возвращаем пустую строку для пустого ввода
    }

    let result = '';
    let currentChar = input[0];
    let count = 1;

    for (let i = 1; i <= input.length; i++) {
        const currentSymbol = input[i];

        if (
            /^[a-zA-Z]+$/.test(currentSymbol) &&
            currentSymbol === currentChar
        ) {
            count++;
        } else {
            if (count > 2) {
                result +=
                    currentChar.repeat(2) +
                    '[' +
                    currentChar.repeat(count - 2) +
                    ']';
            } else {
                result += currentChar.repeat(count);
            }

            if (i < input.length) {
                currentChar = currentSymbol;
                count = 1;
            }
        }
    }

    return result;
}

console.log(stringParse('gghhhhhpp'));
console.log(stringParse('gghhhhhpp123')); // Выведет ошибку
console.log(stringParse(123)); // Тестирование с числовым вводом
