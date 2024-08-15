const toCamelCase = (str) => {
    const newStr = str
        .split(/[-_]/)
        .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
        .join('');

    return str.charAt(0) === newStr.charAt(0)
        ? newStr
        : newStr.charAt(0).toLowerCase() + newStr.slice(1);
};

console.log(toCamelCase('the_stealth-warrior'));
