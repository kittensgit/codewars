const pigIt = (str) =>
    str
        .split(' ')
        .map((item) =>
            !/^[?!@#\$%\^\&*\)\(+=._-]$/.test(item)
                ? item.slice(1) + item.charAt(0) + 'ay'
                : item
        )
        .join(' ');

console.log(pigIt('Pig latin is cool !'));
