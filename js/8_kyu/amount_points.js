const points = (games) =>
    games
        .map((game) => {
            const [x, y] = game.split(':').map((item) => +item);
            return x > y ? 3 : x < y ? 0 : 1;
        })
        .reduce((acc, currVal) => acc + currVal);

console.log(
    points([
        '1:0',
        '2:0',
        '3:0',
        '4:0',
        '2:1',
        '3:1',
        '4:1',
        '3:2',
        '4:2',
        '4:3',
    ])
);
