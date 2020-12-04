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
const filterUnique2 = paramArr => paramArr.filter((item, index, self) => self.indexOf(item) == index);
console.log(filterUnique2(array));

// 2. feladat---------------------------

const hu = {
    date(date) { return date.toLocaleDateString('hu-HU') },
    date2(date) {return new Intl.DateTimeFormat('hu-HU').format(date)},
    currency(cash) {
        const huCurrency = new Intl.NumberFormat('hu-HU', {
            style: 'currency',
            currency: 'HUF'
        });
        return huCurrency.format(cash);
     },
    list(strArr) {
        return strArr.map((item, index, self) => index < self.length-2 ?
            `${item}, ` : index == self.length-2 ? `${item} és ` : `${item}`).join('')
    }
}
const currDate = new Date();
const stringArr = ['első', 'második', 'harmadik', 'negyedik'];
console.log(hu.date(currDate));
console.log(hu.date2(currDate));
console.log(hu.currency(15420.5));
console.log(hu.list(stringArr));
