const alphabetPosition = (str) =>
    str
        .toLowerCase()
        .split(' ')
        .map((item) => item.split(''))
        .flat()
        .map((item) => [...'abcdefghijklmnopqrstuvwxyz'].indexOf(item) + 1)
        .filter((item) => item)
        .join(' ');

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
