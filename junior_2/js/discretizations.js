function defCalc(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b,
        (a + b) * 2
    ]
}

// console.log(defCalc(42, 10));

const [sum, sub, mult, del, und = 'Вычитания нет'] = defCalc(42, 10)
console.log(sum, sub, mult, del, und)

// const [sum, sub, ...other] = defCalc(42, 10)
// console.log(sum, sub, other);

// let result = defCalc(42, 10)
// let sum = result[0]; // обращения по индексу
// let sub = result[1]; // обращения по индексу

const person = {
    name: 'Max',
    age: 20,
    address: {
        country: 'Russia',
        city: 'Moscow',
    }
}

const {name, ...info} = person;
console.log(name, info)

const {
    name: firstName,
    age,
    car = 'No car',
    address: {city: homeTown, country}
} = person
console.log(firstName, age, car, homeTown, country);

function getInfo({name, age}) {
    console.log(name + ' ' + age)
};
getInfo(person)