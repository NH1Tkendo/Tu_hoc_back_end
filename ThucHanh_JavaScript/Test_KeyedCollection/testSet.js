//Khai báo Set
const mySet = new Set();
//======================
//Thêm vào set
// mySet.add(1); // Set(1) { 1 }
// mySet.add(5); // Set(2) { 1, 5 }
// mySet.add(5); // Set(2) { 1, 5 }
// mySet.add("some text"); // Set(3) { 1, 5, 'some text' }
// const o = { a: 1, b: 2 };
// mySet.add(o);
// mySet.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay
// console.log(mySet);
//==================================
//Kiểm tra giá trị trong set
// mySet.has(1); // true
// mySet.has(3); // false, since 3 has not been added to the set
// mySet.has(5); // true
// mySet.has(Math.sqrt(25)); // true
// mySet.has("Some Text".toLowerCase()); // true
// mySet.has(o); // true
//============================================================
//Kiểm tra kích thước và xóa phần tử
// mySet1.size; // 5

// mySet1.delete(5); // removes 5 from the set
// mySet1.has(5); // false, 5 has been removed
//============================================================
// for (const item of mySet1) {
//     console.log(item);
// }
// // 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// for (const item of mySet1.keys()) {
//     console.log(item);
// }
// // 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// for (const item of mySet1.values()) {
//     console.log(item);
// }
// // 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// // key and value are the same here
// for (const [key, value] of mySet1.entries()) {
//     console.log(key);
// }
// // 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// // Convert Set object to an Array object, with Array.from
// const myArr = Array.from(mySet1); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}, 5]

// // the following will also work if run in an HTML document
// mySet1.add(document.body);
// mySet1.has(document.querySelector("body")); // true

// // converting between Set and Array
// const mySet2 = new Set([1, 2, 3, 4]);
// console.log(mySet2.size); // 4
// console.log([...mySet2]); // [1, 2, 3, 4]

// // Iterate set entries with forEach()
// mySet2.forEach((value) => {
//     console.log(value);
// });
// 1
// 2
// 3
// 4
//=======================================================
//Loại bỏ phần tử trùng lặp trong mảng
// const numbers = [2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5];
// console.log([...new Set(numbers)]); // [2, 13, 4, 5, 6, 7, 32]