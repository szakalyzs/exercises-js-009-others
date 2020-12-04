'use strict';

// 1. feladat--------------------------
const array = [11, 22, 11, 33, 33, 44, 22, 55, 66, 77, 55, 88, 99];
// 1. Megoldás: halmazzal és tömbbel
const filterUnique1 = paramArr => {
    const arrToSet = new Set();
    paramArr.forEach(item => arrToSet.add(item));
    const newArr = [];
    arrToSet.forEach(item => newArr.push(item));
    return newArr;
}
console.log(filterUnique1(array));

// 2. Megoldás: csak tömbbel
const filterUnique2 = paramArr => {
    const newArr = [];
    paramArr.forEach((item, index) => paramArr.indexOf(item) == index ? newArr.push(item) : '');
    return newArr;
}
console.log(filterUnique2(array));

