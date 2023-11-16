const alphabetic = (s) => {
    if (s.length === 0) {
        return true;
    }
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] > s[i + 1]) {
            return false;
        }
    }
    return true;
};

console.log(alphabetic('door'));
