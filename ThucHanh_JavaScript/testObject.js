let sync = Symbol("aa");

const a = {
    a: 221,
    23: "Hello",
    45: 12313n,
    sync: "d"
}
delete a.a
console.log(Object.keys(a))
// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

// const myCar = new Car("Eagle", "Talon TSi", 1993);
// const myCar2 = Object.create(Car)
// // console.log(typeof a)
// console.log(myCar2)

// Animal properties and method encapsulation
// const Animal = {
//     type: "Invertebrates", // Default value of properties
//     displayType() {
//       // Method which will display type of Animal
//       console.log(this.type);
//     },
//   };
  
//   // Create new animal type called animal1
//   const animal1 = Object.create(Animal);
//   animal1.displayType(); // Logs: Invertebrates
  
//   // Create new animal type called fish
//   const fish = Object.create(Animal);
//   fish.type = "Fishes";
//   fish.displayType(); // Logs: Fishes
  