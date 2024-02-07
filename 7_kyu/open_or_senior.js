const openOrSenior = (data) =>
    data.map((element) =>
        element[0] >= 55 && element[1] > 7 ? 'Senior' : 'Open'
    );

console.log(
    openOrSenior([
        [45, 12],
        [55, 21],
        [19, -2],
        [104, 20],
    ])
);
