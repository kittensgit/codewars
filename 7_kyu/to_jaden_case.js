String.prototype.toJadenCase = function () {
    return this.split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

const originalString = "How can mirrors be real if our eyes aren't real";
const jadenCasedString = originalString.toJadenCase();

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
