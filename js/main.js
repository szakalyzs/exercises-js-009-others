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

//3. feladat----------------------------
const objectConverter = {
    arrayToMap(paramArr) {
        const tempMap = new Map();
        paramArr.forEach((item, index) => tempMap.set(index, item));
        return tempMap;
     },
    arrayToSet(paramArr) {
        const mySet = new Set();        
        paramArr.forEach(item => mySet.add(item));
        return mySet;
    },
    setToMap(paramSet) {
        const tempMap = new Map();
        paramSet.forEach(value => tempMap.set(value,value));
        return tempMap;
     },
    setToArray(paramSet) {
        const arr = [];
        paramSet.forEach(item => arr.push(item));
        return arr;
    },
    mapToArray(paramMap) {
        const arr = [];
        paramMap.forEach(value => arr.push(value));
        return arr;
     },
    mapToSet(paramMap) { 
        const tempSet = new Set();
        paramMap.forEach(value => tempSet.add(value));
        return tempSet;
    },
}
const mySet = new Set();
mySet.add('id1').add('id2').add('id3').add('id4');
const myMap = new Map();
myMap.set('first', 11).set('second', 22).set('third', 33).set('fourth', 44);

console.log('setToArray: ',objectConverter.setToArray(mySet));
console.log('mapToArray: ',objectConverter.mapToArray(myMap));
console.log('arrayToSet: ',objectConverter.arrayToSet(array));
console.log('mapToSet: ',objectConverter.mapToSet(myMap));
console.log('setToMap: ', objectConverter.setToMap(mySet));
console.log('arrayToMap: ',objectConverter.arrayToMap(array));