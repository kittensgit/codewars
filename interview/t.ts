const X = { a: 1, b: 'd', c: true, d: 4 };

// type XKeys = keyof typeof X; // "a" | "b" | "c" | "d"

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
};

const a = getProperty(X, 'a');
