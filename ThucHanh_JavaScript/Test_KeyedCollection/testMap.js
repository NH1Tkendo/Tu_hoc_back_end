//Khai báo Map
// const myMap = new Map();
//===============================================
//Key trong map có thể là bất cứ kiểu dữ liệu nào
// const keyString = "a string";
// const keyObj = {};
// const keyFunc = () => {};
//===============================================
//Thêm các giá trị vào myMap
// myMap.set(keyString, "This is a string");
// myMap.set(keyObj, "This is an object");
// myMap.set(keyFunc, "This is a function");
// myMap.set(NaN, "This is not a number");
//========================================
//Xuất các giá trị trong myMap
// console.log(myMap);
// console.log(myMap.size);
// console.log(myMap.get(keyString));
// console.log(myMap.get("a string"));
// console.log(myMap.get({})); 
// console.log(myMap.get(() => {}));
// console.log(myMap.get(NaN));
//========================================
//Duyệt qua map
// for(const [key,value] of myMap){
//     console.log(`${key}: ${value}`);
// }
//Có thể dùng myMap.keys() hoặc myMap.values() để thay thế
// for(const key of myMap.keys()){
//     console.log(key);
// }

// myMap.forEach((value, key) => {
//     console.log(`${key}: ${value}`)
// });
//=========================================
//Quan hệ với các đối tượng mảng
//Có thể chuyển array thành map
// const kvArray = [
//   ["key1", "value1"],
//   ["key2", "value2"],
// ];

// const mySecMap = new Map(kvArray);

// console.log(kvArray);
// //Dùng hàm array.from() để chuyển ngược lại thành mảng
// console.log(Array.from(mySecMap));
// //Dùng spread syxtan để làm điều tương tự
// console.log([...mySecMap]);
//=========================================
