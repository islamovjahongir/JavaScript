//  Типы данных бывают "Примитивные" и "Коллекции" 

/*Примитивные бывают:
 - Number (Число): 2019, 1.5, NaN( not a number ), Infinity;
 - String (Строка): 'Hello', "Hello", `Hello`;
 - BooLean: true, false;
 - Null: null;
 - Undefined: undefined;
 - Symbol()
 */

// Number (Число)
const int = 4
const decimal = 0.101
const sameDecimal = .101

// -- Infinity
console.log(5 / 0)
console.log(1e999)

// -- -Infinity
console.log(-3 / 0)

const result = NaN

// -- NaN
/* - Для проверки на NaN пользуйтесь функцией Number.isNaN(),
 которая возвращает true если переданное значение — NaN: 
*/

console.log(Number.isNaN(result))
// true

// String
const hi = 'hello'
const hiTxt = `${hi} Привет`
// const hiTxt = hi.length
/*console.log(hi.toUpperCase()), console.log(hi.toLowerCase()) */
console.log(hiTxt)

// const text = 'today\ngo\nsnow'
const text = 'today\n\tgo\n\t\tsnow'
console.log(text)

let fls = "фрилансер"
let txt = `Привет! Я ${fls}`
console.log(txt)

let fri = 'фрилансер'
console.log(fri.slice(3, 6))

let con = fri[5]
// console.log(con)
console.log(fri.toUpperCase())