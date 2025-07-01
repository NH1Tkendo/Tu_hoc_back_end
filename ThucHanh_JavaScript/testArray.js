//Có 3 cách để tạo array
//Cách 1: sử dụng "[]"
const fruits = ["Apple", "Banana"]
// console.log(fruits.length)
//Cách 2: sử dụng hàm khởi tạo Array()
// const fruits2 = new Array("Apple", "Banana")
// console.log(fruits2.length)
//Cách 3: Sử dụng hàm Split
// const fruits3 = "Apple, Banana".split(",")
// console.log(fruits3.length)
// ===========================

//Tạo một chuỗi từ mảng
// const fruitstring = fruits.join();
// console.log(fruitstring);
//============================

//Truy cập phần tử của một mảng
// console.log(fruits[0])//Apple
// console.log(fruits.length - 1)//Banana
// console.log(fruits[30])//undefined
//============================

//Kiểm tra phần tử trong mảng
// console.log(fruits.includes("he"));
// console.log(fruits.includes("Apple"));
// console.log(fruits.indexOf("Banana") !== -1);//True
// console.log(fruits.indexOf("he") !== -1);//False
//==============================

//Thêm phần tử vào mảng
// fruits.push("Orange");
// console.log(fruits)//[ 'Apple', 'Banana', 'Orange' ]
//Thêm phần tử vào đầu mảng
// fruits.unshift("Strawberry");
// console.log(fruits)
//=======================

//Loại bỏ phần tử ra khỏi mảng
//Loại bỏ phần tử cuối
// fruits.pop();
// console.log(fruits);
//
//Loại bỏ nhiều phần tử sử dụng splice()
//Đối số nhận vào là số nguyên, dương chạy từ trái sang còn âm thì ngược lại
// fruits.push("Orange","Mango", "Strawberry");
// console.log(fruits);//[ 'Apple', 'Banana', 'Orange', 'Mango', 'Strawberry' ]
// const removedItem = fruits.splice(2)
// console.log(fruits);//[ 'Apple', 'Banana' ]
// console.log(removedItem)//[ 'Orange', 'Mango', 'Strawberry' ]
//
//Loại bỏ phần tử đầu tiên của mảng
// const removedItem = fruits.shift();
// console.log(fruits);// ["Banana"]
// console.log(removedItem);// Apple
//=====================================

//Duyệt mảng
// for(let fruit of fruits){
//     console.log(fruit);
// }
// Apple
// Banana
//
// fruits.forEach((item, index, array) => {
//     console.log(item, index);
// });
// Apple 0
// Banana 1
//
//Còn nhiều phương thức dùng để lặp nữa
//======================================

//Nối mảng
// const moreFruits = ["Mango", "Cherry"];
// const newfruits = fruits.concat(moreFruits);
// console.log(newfruits);
//=========================================

//Sao chép mảng
//Sử dụng spread syntax
// const newfruits = [...fruits];
// console.log(newfruits);
//
//Sử dụng from()
// const fruitsCopy2 = Array.from(fruits);
//
//Sử dụng splice()
// const fruitsCopy3 = fruits.slice();
//=========================================


//Test
// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// console.log(styles);
// styles[1] = "Classics";
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift("Rap", "Reggae");
// console.log(styles);
//
// let arr = ["a", "b"];
// arr.push(function(){
//     console.log("Hello word!");
// })
// console.log(arr);
//[ 'a', 'b', [Function (anonymous)] ]
//
//==================================

//Các hàm đã sử dụng
//Splice(start, deleteCount, item1, ... ,itemn): Xóa các phần tử quy định, trả về array
//unshift(item1): thêm vào đầu danh sách
//shift(): Loại bỏ phần tử đầu tiên
//pop(): Xóa phần tử cuối danh sách
//push(item1, ..., itemn): Thêm vào cuối danh sách
//array1.concat(array2): Nối 2 mảng lại và trả về mảng mới, 2 mảng truyền vào giữ nguyên
//=====================================