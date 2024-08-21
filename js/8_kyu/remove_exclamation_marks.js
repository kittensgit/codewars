const removeExclamationMarks = (str) =>
    str
        .split('')
        .filter((item) => item !== '!')
        .join('');
