const disemvowel = (str) =>
    str
        .split(' ')
        .map((item) =>
            item
                .split('')
                .filter((letter) => !'aeiouAEIOU'.includes(letter))
                .join('')
        )
        .join(' ');

console.log(disemvowel('What do you do?'));
