const solution = (number) => {
    if (number > 0) {
        let arr = [];
        for (let i = 1; i < number; i++) {
            arr.push(i);
        }
        return arr
            .filter((num) => num % 3 === 0 || num % 5 === 0)
            .reduce((acc, curr) => acc + curr, 0);
    } else {
        return 0;
    }
};

console.log(solution(1));
