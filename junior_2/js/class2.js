// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTrail: true
// }

class Animal {
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTrail = options.hasTrail
    }

    voice() {
        console.log('It is animal')
    }
}

const animal = new Animal({
    name: 'animal',
    age: 5,
    hasTrail: true
})

class Cat extends Animal {
    constructor(options) {
        super(options)

        this.color = options.color
    }
}

const cat = new Cat({
    name: 'Cat',
    age: 5,
    hasTrail: true,
    color: 'white',
})

class Content {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    show() {
        this.$el.style.display = 'block'
    }

    hide() {
        this.$el.style.display = 'none'
    }
}

class Box extends Content {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box = new Box({
    selector: '#box1', // даем id
    color: 'red',
    size: 100,
})

const box2 = new Box({
    selector: '#box2', // даем id
    color: 'blue',
    size: 100,
})

class Circle extends Box {
    constructor(options) {
        super(options)

        this.$el.style.borderRadius = '50%'
    } 
}

const box3 = new Circle({
    selector: '#box3',
    color: 'yellow',
    size: 150,
})
