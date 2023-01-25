function str() {
    console.log("It is function")
};
str();

function globalFunction() {
    let numOne, numTwo;

    function getNumOne() {
        numOne = 1;
    };

    function getNumTwo() {
        numTwo = 2;
    };
    getNumOne();
    getNumTwo();

    let sumVar = numOne + numTwo;
    console.log(sumVar);
};
globalFunction();


let globalVar = "I am global variable"

function globalFun() {
    let numOne, numTwo;

    function getNumOne() {
        numOne = 8;
        console.log(globalVar);
    };

    function getNumTwo() {
        numTwo = 2;
        console.log(globalVar);
    };
    getNumOne();
    getNumTwo();

    let sumVar = numOne + numTwo;
    console.log(sumVar);
};
console.log(globalVar)
globalFun();

function exampleFun(numberOne, numberTwo) {
    console.log(`I am number ${numberOne}`);
    console.log(`I am number ${numberTwo}`);

    let sumAll = numberOne + numberTwo;
    console.log(`Result: ${sumAll}`);
};

exampleFun(1, 2);

function nextSum(nOne, nTwo, more, less) {
    let sumNum = nOne + nTwo;

    if (sumNum > 3) {
        more()
    } else {
        less();
    };
}

function showMore() {
    console.log('More than 3');
};

function showLess() {
    console.log('Less than 3');
};

nextSum(1, 2, showMore, showLess);

function numbSum(firstNum, secondNum) {
    let result = 1;
    for (let i = 0; i < secondNum; i++) {
        result *= firstNum;
    }
    return result;
}
console.log(numbSum(2, 5));

// другой пример
function calcSumm (numFirst, numSecond) {
    if (numSecond === 1) {
        return numFirst
    } else {
        return numFirst * calcSumm(numFirst, numSecond - 1);
    }
}
console.log(calcSumm(2, 5))

// Стрелочная оьращения
let variable = (text, names) => text + ', ' + names;
console.log(variable('It is', 'text')) ;

let variableSecond