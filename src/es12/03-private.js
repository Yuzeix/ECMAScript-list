//declarando
class User{}
// instancia de una clase
// const newUser = new User();

class user {
    //metodos
    greeting() {
        return 'Hello Its me';
    }
};

const gndx = new user ();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

//constructor

class user {
    //constructor
    constructor() {
        console.log('Nuevo Usuario');
    }
    greeting() {
        return 'Hello Its me';
    }
}

const david = new user();

//this

class user {
    constructor (name) {
        this.name = name;

    }
    //metodos
    speak() {
        return 'HELL NOT';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana= new user('Ana');
console.log(ana.greeting());

// setters getters

class user {
    //constructor
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    //metodos
    #speak() {
        return "hello"
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }

}

const bebeloper1 = new user("David", 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);

const arr = [1, 2, 3, 4, 5]; 

const result = arr.map(num => num * 2).filter(num => num > 5); 

console.log(result);