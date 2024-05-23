// My variant

// export const findOdd = (array: number[]): number => {
//     let obj: {
//         [key: string]: number;
//     } = {};
//     for (let i = 0; i < array.length; i++) {
//         obj[array[i]] = (obj[array[i]] || 0) + 1;
//     }

//     return Number(
//         Object.entries(obj)
//             .filter((item) => item[1] % 2 !== 0)
//             .flat()[0]
//     );
// };

// GPT variant

// const findOdd = (array: number[]): number => {
//     const obj = array.reduce((acc, num) => {
//         acc[num] = (acc[num] || 0) + 1;
//         return acc;
//     }, {} as { [key: number]: number });

//     return Number(
//         Object.entries(obj)
//             .filter((item) => item[1] % 2 !== 0)
//             .flat()[0]
//     );
// };

// Upgrade GPT variant

const findOdd = (array: number[]): number =>
    Number(
        Object.entries(
            array.reduce((acc, num) => {
                acc[num] = (acc[num] || 0) + 1;
                return acc;
            }, {} as { [key: number]: number })
        )
            .filter((item) => item[1] % 2 !== 0)
            .flat()[0]
    );

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
