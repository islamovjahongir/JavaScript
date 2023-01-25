// ОБЪЕКТЫ
let firstLikes = "likes";
let id = Symbol("id");
let userinfo = {
    surname: "Вася",
    age: 20,
    // "likes javascript" : true
    [firstLikes + " javascript"]: true,
    [id]: "Некое значение",
    address: {
        street: "Rudaki",
        city: "Dushanbe",
    }
}
console.log(userinfo)
// console.log(userinfo.address)
console.log(userinfo ?.address ?.city);

if ("surname" in userinfo) {
    console.log(userinfo.surname)
}

for (let key in userinfo) {
    console.log(key)
    console.log(userinfo[key])
}

for (let key in userinfo.address) {
    console.log(key);
    console.log(userinfo.address[key])
}

let per = Object.assign({}, userinfo) // assign меняет оба значение "key" : "value" на другое
per.surname = "Ann",
    per.age = 19
console.log(per)

userinfo.age = 30;
delete userinfo.address;


let key = "age";
console.log(userinfo[key])

function makeuserinfo(name, age) {
    return {
        name: name,
        age: age,
    }
}

let user = makeuserinfo('Mark', 30)
console.log(user)

// console.log(userinfo.surname)
// console.log(userinfo['likes javascript'])
// console.log(userinfo['surname'])

let userInfo = {
    name: "John",
}
console.log(userInfo);

userInfo.age = 25;
console.log(userInfo);

userInfo.address = {
    street: "Rudaki",
    city: "Dushanbe",
}
console.log(userInfo)

let obj = {
    names: "John",
    age: 25,
    address: {
        street: "Rudaki",
        city: "Dushanbe",
    },
    showInfo() {
        console.log(`${obj.names}, ${obj.age} лет. Адрес: ул.${obj.address.street}, город.${obj.address.city}`);
        // console.log(`${this.names}, ${this.age} лет. Адрес: ул.${this.address.street}, город. ${this.address.city}`)
    }
}

obj.showInfo()

function UserInfo(name) {
    this.name = name,
    this.age = 30
} 

console.log(new UserInfo('Luisa'));
console.log(new UserInfo('Dark'));