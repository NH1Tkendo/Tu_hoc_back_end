class Dog {
    constructor(name, age, breed) {
        this.name = name
        this.age = age
        this.breed = breed
    }
    tellUsAboutYourSelf() {
        return `My name is ${this.name}. I am a ${this.breed} and I am ${this.age} years old.`
    }

    woof() {
        return "WOOF!!!"
    }
}

class Cat {
    constructor(name, age, breed) {
        this.name = name
        this.age = age
        this.breed = breed
    }

    meow() {
        return "MEOW!!!"
    }
}

let fido = new Dog("Fido", 3, "dachshund");
console.log(fido.tellUsAboutYourSelf());
//=> 'My name is Fido. I am a dachshund and I am 3 years old.'

let sparkles = new Cat("Sparkles", 5, "Siamese")

console.log(fido.tellUsAboutYourSelf.call(sparkles));
console.log(fido.tellUsAboutYourSelf.apply(sparkles));
const describeSparkles = fido.tellUsAboutYourSelf.bind(sparkles);
console.log(describeSparkles());
//=>’My name is Sparkles. I am a Siamese and I am 5 years old.’