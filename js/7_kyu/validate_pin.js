const validatePIN = (pin) =>
    pin.length === 4 || pin.length === 6
        ? pin.split('').every((item) => /[\d]/.test(item))
        : false;

console.log(validatePIN('340085'));
