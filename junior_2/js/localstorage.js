const myNumber = 42;

// localStorage.removeItem('number'); // removeItem удаляет
// console.log(localStorage.getItem('number'));

// localStorage.setItem('number', myNumber);
// console.log(localStorage.getItem('number'));

// localStorage.clear() // чистит или удаляет все

const obj = {
    namem: 'Max',
    age: 20,
}

localStorage.setItem('person', JSON.stringify(obj));
//stringfy из объекта превращает в строк obj

console.log(localStorage.getItem('person'));

const raw = localStorage.getItem('person');
const person = JSON.parse(raw);
// parse нужен для того чтобы изменить что нибудь

person.namem = 'Lewis';
console.log(person);


/**/
const numb = 1010;

localStorage.setItem('getNumb', numb);
console.log(localStorage.getItem('getNumb'));

const objTwo = {
    surn: 'Lecler',
    ages: 20,
}

localStorage.setItem('obj', JSON.stringify(objTwo))
console.log(localStorage.getItem('obj'))

const change = localStorage.getItem('obj');
const changeSecond = JSON.parse(change);
changeSecond.surn = 'Sainz';
changeSecond.ages = 50;

console.log(changeSecond)

/* */
let surname = localStorage.username; // Запросить сохраненное значение,
if (!surname) {
    паше = prompt("What is your паше?");
    // Задать пользователю вопрос насчет его имени.
    localStorage.username = surname; // Сохранить ответ
    // пользователя.
}