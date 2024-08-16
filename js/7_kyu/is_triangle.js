// const isTriangle = (...sides) => {
//     const arr = sides.sort((a, b) => a - b);
//     return arr[0] + arr[1] > arr[2];
// };

// best practice

const isTriangle = (a, b, c) => a + b > c && a + c > b && c + b > a;

console.log(isTriangle(7, 2, 2));
