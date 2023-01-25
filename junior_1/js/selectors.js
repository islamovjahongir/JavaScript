let str = document.querySelectorAll("ul > li")
// let str = document.querySelectorAll(".ul > li"); это второй вариант
// console.log(str[0]); берет только первый элемент

for (let val of str) {
    console.log(val)
}

let strSecond = document.querySelector("ol > li");
console.log(strSecond);

// Метод MATCHES
let string = document.querySelectorAll("ul > li");
for (let item of string) {
    if(item.matches("li.star")) {
        console.log(item)
    }
}

// другой пример
const search = document.querySelectorAll('.lesson_sublist');
for (let elem of search) {
    if (elem.matches('[class$="star_red"]')) {
        console.log('Красный');
    } else if (elem.matches('[class$="star_blue"]')) {
        console.log('Синий');
    }
}

// Метод CONTAINS
let div = document.querySelector("div.content-table");
let ul = document.querySelector("ul.start-list");

if (div.contains(ul)) {
    console.log(true)
} else {
    console.log(false)
}

/* 1) "," если внутри querySelectorAll('.firstClass, .secondClass') - он берет 
    оба два этих классов
    2) " " (без запятаи) querySelectorAll('.firstClass .secondClass')
    он берет те "secondClass" - и которые внутри родительского элемента (firstClass)
*/

// Поиск по атрибутам
// let data = document.querySelectorAll([data-item])
// console.log(data)

// let data = document.querySelectorAll([data-tem="50"]) поиск по конкретному значению

// Искать можно не только в document
const subList = document.querySelectorAll('.ul'); // ищет те дочерные элементы 
// которые находятся внутри родителського класса

const subItems = subList[0].querySelectorAll('li'); // берем дочерные элементы
console.log(subItems);

// другой пример
const subList2 = document.querySelectorAll('.ul');
const subItems2 = subList2[0].querySelectorAll('.section .lesson_sublist');
// ищем все те элементы которые нам нужны
console.log(subItems2);

// document.getElementsByTagName
let tag = document.getElementsByTagName('ul');
console.log(tag);

// document.getElementsByClassName
let className = document.getElementsByClassName('lesson_sublist');
// разница в том что здесь внутри ' ' не ставим точку
console.log(className);

// document.getElementsByName
let nameEl = document.getElementsByName('div_name');
// если у элемента есть какое-нибудь name то он ищет по этому атрибуту
console.log(nameEl);

// разница между живая коллекция и статитической
let listStatic = document.querySelectorAll('.lesson_sublist');

let listLife = document.getElementsByClassName('lesson_sublist')

console.log(listStatic);
console.log(listLife);

const addEl = document.querySelector('.ul');
addEl.insertAdjacentHTML (
    "beforeend",
    `<li class="lesson_sublist">Новый пункт</li>`
)

// Метод closest
// Это метод найдет родительский элемент
const childEl = document.querySelector('.lesson_sublist');
const parentEl = childEl.closest('.ul')
console.log(parentEl);

console.log('/////')

// Метод навигации 
let nextEl2 = document.querySelector('.content-table');
let presentEl2 = nextEl2.nextElementSibling;
console.log(presentEl2);