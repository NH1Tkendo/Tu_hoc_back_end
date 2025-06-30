//Tạo một buffer có kích thước 16 bytes
const buffer = new ArrayBuffer(16);
//Tạo một view xử lý dữ liệu trong buffer như một mảng 32 bit
const int32view = new Int32Array(buffer);
const int16view = new Int16Array(buffer);
const float32view = new Float32Array(buffer);
int32view[3] = 5;
console.log(int32view);
console.log(int16view);
console.log(float32view);