// // Numbers
// typeof 37 === "number";
// typeof 3.14 === "number";
// typeof 42 === "number";
// typeof Math.LN2 === "number";
// typeof Infinity === "number";
// typeof NaN === "number"; // Despite being "Not-A-Number"
// typeof Number("1") === "number"; // Number tries to parse things into numbers
// typeof Number("shoe") === "number"; // including values that cannot be type coerced to a number

// typeof 42n === "bigint";

// // Strings
// typeof "" === "string";
// typeof "bla" === "string";
// typeof `template literal` === "string";
// typeof "1" === "string"; // note that a number within a string is still typeof string
// typeof typeof 1 === "string"; // typeof always returns a string
// typeof String(1) === "string"; // String converts anything into a string, safer than toString

// // Booleans
// typeof true === "boolean";
// typeof false === "boolean";
// typeof Boolean(1) === "boolean"; // Boolean() will convert values based on if they're truthy or falsy
// typeof !!1 === "boolean"; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

// // Symbols
// typeof Symbol() === "symbol";
// typeof Symbol("foo") === "symbol";
// typeof Symbol.iterator === "symbol";

// // Undefined
// typeof undefined === "undefined";
// typeof declaredButUndefinedVariable === "undefined";
// typeof undeclaredVariable === "undefined";

// // Objects
// typeof { a: 1 } === "object";

// // use Array.isArray or Object.prototype.toString.call
// // to differentiate regular objects from arrays
// typeof [1, 2, 4] === "object";

// typeof new Date() === "object";
// typeof /regex/ === "object";

// // The following are confusing, dangerous, and wasteful. Avoid them.
// typeof new Boolean(true) === "object";
// typeof new Number(1) === "object";
// typeof new String("abc") === "object";

// // Functions
// typeof function () {} === "function";
// typeof class C {} === "function";
// typeof Math.sin === "function";

// 
// const data = 99
// console.log(typeof data + "foo") numberfoo
// console.log(typeof (data + "foo")) string

// function type(value) {
//     if (value === null) {
//       return "null";
//     }
//     const baseType = typeof value;
//     // Primitive types
//     if (!["object", "function"].includes(baseType)) {
//       return baseType;
//     }
  
//     // Symbol.toStringTag often specifies the "display name" of the
//     // object's class. It's used in Object.prototype.toString().
//     const tag = value[Symbol.toStringTag];
//     if (typeof tag === "string") {
//       return tag;
//     }
  
//     // If it's a function whose source code starts with the "class" keyword
//     if (
//       baseType === "function" &&
//       Function.prototype.toString.call(value).startsWith("class")
//     ) {
//       return "class";
//     }
  
//     // The name of the constructor; for example `Array`, `GeneratorFunction`,
//     // `Number`, `String`, `Boolean` or `MyCustomClass`
//     const className = value.constructor.name;
//     if (typeof className === "string" && className !== "") {
//       return className;
//     }
  
//     // At this point there's no robust way to get the type of value,
//     // so we use the base implementation.
//     return baseType;
//   }

// console.log(type(1))