let massiv = [
    "John",
    {
        type : "Js",
        age : 25,
    },
    true,
    function () {
        console.log("Hi! My name is John")
    },
];

console.log(massiv);
console.log(massiv[0]);
console.log(massiv[1].type);
console.log(massiv[2]);
massiv[3]()

let names = ['Max', 'Lewis', 'Lecrel']
console.log(names)
console.log(names.length)

let src = names
src.length = 2;
console.log(src)
console.log(src.length)

let arr = ['Sainz', 'Fer', 'Bottas'];
arr[0] = 'Mick';
arr[3] = 'Checo';

// Методы массивов
arr.push('Poco') /* PUSH добавляет новый элемент в КОНЦЕ массива */ 
arr.shift() /* SHIFT удаляет ПЕРВЫЙ элемент из массива */
arr.pop() /* POP удаляет ПОСЛЕДНИЙ элемент из массива */
arr.unshift('Max') /* UNSHIFT добавляет элемент в НАЧАЛО массива */

delete arr[2]
console.log(arr[2])
console.log(arr.length)

let arrOne = ['Sainz', 'Fer', 'Bottas'];
arrOne.splice(1, 1)
console.log(arrOne)

let arrTwo = ['Sainz', 'Fer', 'Bottas'];
let removed = arrTwo.splice(1, 1)
console.log(removed)

let arrThird = ['Sainz', 'Fer', 'Bottas'];
arrThird.splice(0, 1, "Коля");
console.log(arrThird)

let arrFourth = ['Sainz', 'Fer', 'Bottas'];
arrFourth.splice(1, 0, "Коля", "Ваня");
console.log(arrFourth)

let arrFifth = ['Sainz', 'Fer', 'Bottas'];
let cont = arrFifth.concat("Анна") /* concat помогает копировать и добавлять элемент */
console.log(cont)

let find = ['Sainz', 'Fer', 'Bottas'];
console.log(find.sort())
console.log(find.reverse()) //сортирует элементы в обратной стороны 
console.log(find.indexOf('Sainz'));
console.log(find.lastIndexOf('Fer'));
console.log(find.includes('Bottas'));

let sortArr = [1, 8, 22];
console.log(sortArr.sort((a, b) => a - b));
// console.log(sortArr.sort());

let object = [
    {names : 'Max', age: 24},
    {names : 'Lewis', age : 30},
    {names : 'Sainz', age : 25},
]

let resultOne = object.find(function(item, index, array) {
    return item.age === 24
}); 
console.log(resultOne)

let resultSecond = object.find(item => item.age === 24);
console.log(resultSecond);

let objectT = [
    {names : 'Max', age: 24},
    {names : 'Lewis', age : 30},
    {names : 'Sainz', age : 25},
]

let res = objectT.filter(function(item, index, array){
    return item.age <= 25;
});
console.log(res)

// Метод MAP

let surn = ['Ваня', 'Оля', 'Саша',];

let resSurn = surn.map(function(item, index, array) {
    return item = item[0];
});

// let resSurn = surn.map(item =>  item[0]);

console.log(surn);
console.log(resSurn);

// Метод split и join

let namSp = "Ваня,Оля,Саша";
let mas = namSp.split(',');
console.log(mas);

let str = ['Lewis', 'Max', 'Join'];
let string = str.join(',');
console.log(string);

// Метод Array.isArray()

let obj = {};
let arrType = [];

console.log(typeof obj);
console.log(typeof arrType);

if (Array.isArray(arrType)) {
    console.log('It is array');
} else {
    console.log('It is not array');
};

// Цикл for с массивами

let arrFor = ['Lewis', 'Max', 'Join'];
console.log(arrFor.length);

for (i = 0; i < arrFor.length; i++) {
    console.log(arrFor[i]);
}

// Метод forEach
let arrEach = ['Lewis', 'Max', 'Join'];

// arrEach.forEach(function(item, index, array){
//     console.log(`${item} находиться на ${index} позиции в ${array}`)
// });

arrEach.forEach((item, index, array) => {
    console.log(`${item} находиться на ${index} позиции в ${array}`)
});

let arrEachSecond = ['Lewis', 'Max', 'Join'];
arrEachSecond.forEach(show);

function show(item) {
    console.log(item)
}

