// const myLanguages = (list) =>
//     Object.entries(list)
//         .filter((language) => language[1] >= 60)
//         .sort((a, b) => b[1] - a[1])
//         .map((language) => language[0])
//         .flat();

const myLanguages = (list) =>
    Object.keys(list)
        .filter((language) => list[language] >= 60)
        .sort((a, b) => list[b] - list[a]);

console.log(myLanguages({ Java: 10, Python: 65, Ruby: 80 }));
