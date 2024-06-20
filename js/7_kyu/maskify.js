const maskify = (str) =>
    str.length > 4
        ? str
              .slice(0, str.length - 4)
              .split('')
              .map((item) => item.replace(item, '#'))
              .join('') + str.slice(str.length - 4)
        : str;

console.log(maskify('4lv96uzh9j3z84rux'));
