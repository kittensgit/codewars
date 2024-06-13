// my variant

const fooBar = (num) => {
    const arr = [];
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push('foobar');
        } else if (i % 3 === 0) {
            arr.push('foo');
        } else if (i % 5 === 0) {
            arr.push('bar');
        } else {
            arr.push(i);
        }
    }
    return arr;
};

console.log(fooBar(15));

// variant gpt

const fooBar1 = (num) =>
    Array.from({ length: num }, (item, index) =>
        (index + 1) % 3 === 0 && index % 5 === 0
            ? 'foobar'
            : (index + 1) % 3 === 0
            ? 'foo'
            : (index + 1) % 5 === 0
            ? 'bar'
            : index + 1
    );

console.log(fooBar1(15));
