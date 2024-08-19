const betterThanAverage = (classPoints, yourPoints) =>
    yourPoints >
    classPoints.reduce((acc, currVal) => acc + currVal, 0) / classPoints.length;

console.log(betterThanAverage([2, 3], 5));
