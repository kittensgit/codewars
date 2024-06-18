const findOdd = (nums) => {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }
    return +Object.entries(obj)
        .filter((item) => item[1] % 2 !== 0)
        .flat()[0];
};

console.log(findOdd([0, 1, 0, 1, 0]));
