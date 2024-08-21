const getAverage = (arr) =>
    Math.floor(arr.reduce((a, c) => a + c) / arr.length);
