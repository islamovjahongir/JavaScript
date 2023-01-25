let newDiv = document.createElement('div');

newDiv.innerHTML = (
    `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta accusamus illo soluta modi molestias ea quidem dolorem quasi aspernatur, fugit dolores temporibus, doloribus odio voluptatibus exercitationem adipisci impedit iste. Rem.</p>`
);
console.log(newDiv)

// Добавление элемента
let getDiv = document.querySelector('.div_el');
getDiv.before(newDiv); // перед элементом
getDiv.after(newDiv); // после элемента
getDiv.prepend(newDiv); // внутри и в начало
getDiv.append(newDiv); // внутри и в конце


// Change style
// getDiv.style.background = 'aqua'; //первый вариант

getDiv.style.cssText = `
    border: 1px solid red;
    border-radius: 5px;
    font-weight: bold;
    padding: 5px;
    background: aqua;
`;

// Добавление классов и др
let classLi = document.querySelector('.list');

classLi.classList.add('array');
classLi.classList.remove('array');
classLi.classList.toggle('array');
classLi.classList.contains('array')

// Обращения с классами в div
let clName = document.querySelector('.div_1')

for (let i of clName.classList) {
    console.log(i);
};

// Копирование элементов
let mainOL = document.querySelector('.main_ol');
let section = document.querySelector('.section');

let copyOl = mainOL.cloneNode(true); //копирование
// remove -- удаление элемента

section.prepend(copyOl);
section.style.cssText = `
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin-top: 10px;
`;

// Перемещение элемента 
let situat = document.querySelector('.h4');
section.prepend(situat);

// Метод Matches
let listMatch = document.querySelector('.list');
for (let valM of listMatch) {
    if (valM.matches('[class$="list_red"]')) {
        console.log("Красный");
    } else if (valM.matches('[class$="list_blue"]')) {
        console.log("Синий")
    }
}