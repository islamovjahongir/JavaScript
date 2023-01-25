// while (Условия) {
//     Тела цикла
//     Тут будет выполняться код
// }

let num = 0;
while (num < 10 ) {
    console.log(num);
    num++;
};

let numS = 10;
while (numS) {
    console.log(numS)
    numS--;
}

// let numS = 5;
// while (numS) console.log(num--);

// Цикл do выполняеть только тела цикла
let numT = 0;
do {
    console.log(numT);
    numT++;
} while (numT < 0)

// Цикл FOR
/* 
for (Начало; Условия; Шаг) {
    Тела цикла
    Тут будет выполняться код
}
 */

let numF;   
for (let numF = 0; numF < 6; numF++) {
    console.log(numF)
}

console.log(`Вывод вне цикла: ${numF}`);

// Метод BREAK
let numb = 0;
for (; numb < 5; numb++) {
    console.log(numb)
    if (numb == 2) break;
}

//  Метод CONTINUE 
let numb2 = 0;
for (; numb2 < 5; numb2++) {
    if (numb2 == 2) continue;
    console.log(numb2);
}

// Метки
firstFor : for(let numb3 = 0; numb3 < 2; numb3++) {
    for (let size = 0; size < 3; size++) {
        if (size == 2) {
            break firstFor
        }
        console.log(size)
    }
};

secondFor : for (let numb4 = 0; numb4 < 2; numb4++) {
    for (let size2 = 0; size2 < 3; size2++) {
        if (size2 == 2) {
            continue secondFor
        };
        console.log(size2);
    }
};