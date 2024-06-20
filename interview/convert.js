const input = [
    {
        value: 'abcd',
        order: 4,
        expired: false,
    },
    {
        value: 'qwer',
        order: 2,
        expired: true,
    },
    {
        value: 'xyz1',
        order: 1,
        expired: false,
    },
    {
        value: 'abx2',
        order: 3,
        expired: false,
    },
];

const convert = (arr) =>
    [
        ...new Set(
            arr
                .filter((item) => !item.expired)
                .sort((o1, o2) => o1.order - o2.order)
                .map((item) => item.value.split('').reverse())
                .flat()
        ),
    ].join('');

console.log(convert(input));
