"use strict";
//This với object function
// const obj = {
//     name: "A",
//     fullName: "Nguyen Van",
//     fun: function(){
//         console.log(this.name + " " + this.fullName);
//     }
// }

// obj.fun();
//===================================================
// function getThis(){
//     return this.name;
// }

// const obj1 = {
//     name: "A"
// };

// const obj2 = { name: "B"};

// const obj3 = {
//     __proto__: obj1,
//     name: "C"
// }

// obj1.getThis = getThis;
// obj2.getThis = getThis;

// console.log(obj1.getThis() + obj2.getThis()+ obj3.getThis());
//=====================================================
// function getThisStrict() {
//     "use strict"; // Enter strict mode
//     return this;
// }

// // Only for demonstration — you should not mutate built-in prototypes
// Number.prototype.getThisStrict = getThisStrict;
// console.log(typeof (1).getThisStrict()); // "number"
//========================================================
//====================this + constructor==============================
// function C() {
//     this.a = 37;
// }

// let o = new C();
// console.log(o.a); // 37

// function C2() {
//     this.a = 37;
//     return { a: 38 };
// }

// o = new C2();
// console.log(o.a); // 38
//=====================================================================  
//========================Class context================================
// class Example {
//     static staticField = () => console.log("Static this:", this);
//     instanceField = () => console.log("Instance this:", this);

//     constructor() {
//         console.log("Constructor this:", this);
//     }

//     method() {
//         console.log("Method this:", this);
//     }

//     static staticMethod() {
//         console.log("Static Method this:", this);
//     }

//     static {
//         console.log("Static block this:", this);
//     }
// }

// const e = new Example();
// e.method();               // this -> instance
// Example.staticMethod();   // this -> class
// e.instanceField();        // this -> instance
// Example.staticField();    // this -> class
//===========================Examples===================================  
//Ví dụ: Giá trị của this phụ thuộc vào hàm được gọi chứ không phải cách nó được định nghĩa
// const a = {
//     b: "Custom"
// };


// function locateThis(){
//     return this.b;
// }

// console.log(locateThis());//undefined

// a.locate = locateThis;
// console.log(a.locate());//Custom
//==================================================================
//Dùng hàm call() và apply() để truyền giá trị của this như một tham số
// function add(c, d) {
//     return this.a + this.b + c + d;
// }

// const o = { a: 1, b: 3 };

// // The first argument is bound to the implicit 'this' parameter; the remaining
// // arguments are bound to the named parameters.
// add.call(o, 5, 7); // 16

// // The first argument is bound to the implicit 'this' parameter; the second
// // argument is an array whose members are bound to the named parameters.
// add.apply(o, [10, 20]); // 34
//=================================================================
// const obj = {
//     a: 7,
//     getThisGetter() {
//         const getter = () => this.a;
//         return getter;
//     },
// };

// const fn = obj.getThisGetter();
// console.log(fn());
//=================================================================
// function sum() {
//     return this.a + this.b + this.c;
// }

// const o = {
//     a: 1,
//     b: 2,
//     c: 3,
//     get average() {
//         return (this.a + this.b + this.c) / 3;
//     },
// };

// o.sum = sum;
// console.log(o.sum());
//==================================================================
//Create a caculator
// const caculator = {
//     sum(){
//         return this.a + this.b;
//     },
//     mul(){
//         return this.a * this.b;
//     },
//     read(a, b){
//         caculator.a = a;
//         caculator.b = b;
//     }
// }

// caculator.read(5,7);
// console.log(caculator.sum());
//==================================================================
//chaining
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // shows the current step
        console.log(this.step);
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep();
//Nếu không có return this thì mặc định trả về undefined, mà undefined.up() thì sẽ gây lỗi
