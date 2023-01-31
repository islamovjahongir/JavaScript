// // const animal = {
// //     name: 'animal',
// //     age: 5,
// //     hasTrail: true
// // }

// class Animal {
//     static type = 'Console'

//     constructor(options) {
//         this.name = options.name,
//             this.age = options.age,
//             this.hasTrail = options.hasTrail
//     }

//     voice() {
//         console.log("It is animal's object")
//     }
// }

// const animal = {
//     name: 'Animal',
//     age: 7,
//     hasTrail: true
// }

// class Cat extends Animal {
//     static type = 'wild'

//     constructor(options) {
//         super(options)
//         this.color = options.color
//     }

//     voice() {
//         console.log('It is cat')
//     }

//     get ageInfo() {
//         return this.age * 7
//     }

//     set ageInfo(newAge) {
//         this.age = newAge
//     }
// }

// const cat = new Cat({
//     name: 'Cat',
//     age: 5,
//     hasTrail: true,
//     color: 'white'
// })

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    show () {
        this.$el.style.display = 'block';
    }

    hide() {
        this.$el.style.display = 'none'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box = new Box({
    selector: '#box1',
    color: 'red',
    size: 100,
});

const box2 = new Box({
    selector: '#box2',
    color: 'blue',
    size: 150,
});

class Circle extends Box {

    constructor(options) {
        super(options)
        this.$el.style.borderRadius = '50%'
    }
}

const box3 = new Circle({
    selector: '#box3',
    color: 'green',
    size: 90
})

