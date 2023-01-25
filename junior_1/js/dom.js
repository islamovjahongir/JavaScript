// first
const htmlElement = document.documentElement;
const headElement = document.headElement;
const bodyElement = document.bodyElement;

console.log(htmlElement);
console.log(headElement);
console.log(bodyElement);

// firstChild, lastChild и другие методы
const bodyElement2 = document.body;

const firstCh = bodyElement2.firstChild; // обращаемся первому элементу
const lastCh = bodyElement2.lastChild; // обращаемся к последному элементу

// Соседние и родительский узлы
const previousNode = bodyElement2.previousSibling; // обращаемся к предудущим элементам (body)
const nextNode = bodyElement2.nextSibling; // обращаемся к следущим элементам
const presentNode = bodyElement2.parentNode; // обращаемся к настоящим элементам

// Навигация только по элементам
const previousEl = bodyElement2.previousElementSibling;
const nextEl = bodyElement2.nextElementSibling;
const presentEl = bodyElement2.parentElement;

console.log(firstCh);
console.log(lastCh);
// 
console.log(previousNode);
console.log(nextNode);
console.log(presentNode);
// 
console.log(previousEl);
console.log(nextEl);
console.log(presentEl);


// Childnodes берет все дочерные элементы(теги, коменти)

const bodyElement3 = document.body;

const ChildNod = bodyElement3.childNodes;
console.log(ChildNod);
console.log(bodyElement3.hasChildNodes()); // это для проверки дочерных элементов (если есть то TRUE)

// for (let node of ChildNod) {
//     console.log(node)
// }

// Children - берет только содержащие html элементы (теги)

const children = bodyElement3.children;
console.log(children);

// Методы получения Html элементов
let tag = document.querySelector('.dom');
let conDom = tag.innerHTML;
console.log(conDom);

// tag.innerHTML = 'Life is short';

// другой пример

tag.innerHTML = (
    `<h3>${conDom}</h3> <h3>Life is short</h3>`
);
console.log(tag.innerHTML);

// outHTML
let tag2 = document.querySelector('.dom');
let conDom2 = tag2.outerHTML;

tag2.outerHTML = (
    `<h4>${conDom2}</h4> <h4>Second example</h4>`
);

console.log(tag2.outerHTML);

// Метод textContent
let tag3 = document.querySelector('.div_dom');
let conDom3 = tag3.textContent;
console.log(conDom3);

// Другой пример

// tag3.textContent = (
//     `<h4>It is example for test</h4>`
// );
// console.log(tag3.textContent);

// Comments
let comment = document.querySelector('.div_dom');
let getComment = comment.nextSibling;
console.log(getComment);

// Создание обычного узла
let newText = document.createTextNode('Hi it is a text');
console.log(newText);

// Создание тегов createElement

let newElement = document.createElement('div');
console.log(newElement);

// Создание контекста внутри нового элемента

newElement.innerHTML = (
    `<span style="color:green">This is a new element</span>`
);

/* Как поставить наш новый элемент внутри какого либо тега или 
   перед, после элемента
*/

let getNewEl = document.querySelector('.ul');

/* С помощью этих элементов можно изменить место нахождения
    HTML элементов
*/

let sit = document.querySelector('.div_dom');
let txt = document.querySelector('.h5');

sit.append(txt);

// ...перед объектом
getNewEl.before(newElement);
// ...после объекта
getNewEl.after(newElement);
// ...внутрь и в начало объекта
getNewEl.prepend(newElement);
// ...внутрь и в конец объекта
getNewEl.append(newElement);


/*  Метод insertAdjacentHTML 
    Вставляет текст, HTML, элемент;

    Метод insertAdjacentText 
    Вставляет текст даже тегов  как текст;

    Метод insertAdjacentElement
    Вставляет элементы
*/
let insertAd = document.querySelector('.start-list');

insertAd.insertAdjacentHTML(
    'afterend',
    `<p style="color: red">New Formula 1</p>`
);

/*
 'beforebegin' - вставить html непосредственно перед insertAd;
 'afterbegin' - вставить html в начало insertAd;
 'beforeend' - вставить html в конец insertAd;
 'afterend' - вставить html непосредственно после insertAd;
 */

// Метод cloneNode - этот метод копирует элемент и потом мы можем поставить его куда нибудь
let copy = document.querySelector('.start-list');
let past = document.querySelector('.ol-div');

let copyPast = copy.cloneNode(true);
past.append(copyPast)

// Метод remove
let del = document.querySelector('.lorem');
del.remove();

// Метод className
let nameCss = document.querySelector('.p-class');
nameCss.className = 'black';

//Метод classList
let clList = document.querySelector('.df-class');

// Добавит класс
clList.classList.add('active');
// Удалить класс
clList.classList.remove('active');
//  Добавит класс елси его нету, если есть удалить
clList.classList.toggle('active');
// Проверка наличия класса возвращает true/fase
clList.classList.contains('active')

if (clList.classList.contains('active')) {
    console.log('I have got this class')
} else {
    console.log(false)
}

for (let val of clList.classList) {
    console.log(val)
}

// Измениние css элемента
clList.style.color = 'blue';

// Метод cssText

clList.style.cssText =`
    font-weight : bold;
    font-size : 20px;
`;

// Метод getCompletedStyle - помогает получить css элементы
let getStyle = getComputedStyle(clList, "::before");
console.log(getStyle.fontSize)

// Работа с атрибута
let inp = document.querySelector('.input');

// Проверяем наличие атрибута
inp.hasAttribute('name');
// Получаем значение атрибута
inp.getAttribute('name');
// Уставнавливаем значение атрибута
inp.setAttribute('name', 'value');
// Удаляем атрибут
inp.removeAttribute('name');