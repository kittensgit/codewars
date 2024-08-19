const fakeBin = (nums) =>
    nums
        .split('')
        .map((num) => (num < 5 ? num.replace(num, '0') : num.replace(num, '1')))
        .join('');

console.log(fakeBin('45385593107843568'));
