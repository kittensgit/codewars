const findShort = (str) => {
    let arr = str.split(' ');
    let lowestNum = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (lowestNum > arr[i].length) {
            lowestNum = arr[i].length;
        }
    }
    return lowestNum;
};

console.log(findShort("Let's travel abroad shall we"));
