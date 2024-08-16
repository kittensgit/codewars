const dna = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
};

const dnaStrand = (str) =>
    str
        .split('')
        .map((item) => dna[item])
        .join('');

console.log(dnaStrand('AAAA'));
