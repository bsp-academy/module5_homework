let arr = [1, 1, 1, 1, 1]; // здесь можно изменить значения массива
let allEqual = arr.every((val, i, arr) => val === arr[0]);

console.log(allEqual);
