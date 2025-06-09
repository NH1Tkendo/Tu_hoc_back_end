# Tu_hoc_back_end
Repo này ghi lại quá trình tự học back-end theo roadmap trong link: https://roadmap.sh/backend

## Tác giả: Ngô Bá Tài
## Chương 1: Internet 
### 1.1 Internet hoạt động như nào
#### 1.1.1 Internet là gì?
[Internet là gì ?](https://youtu.be/Dxcc6ycZ73M)

[Hệ thống Internet:Dây dẫn, cáp mạng và Wi-Fi](https://youtu.be/ZhEf7e4kopM)

[Địa chỉ IP, DNS](https://youtu.be/5o8CwafCxnU)

Internet là một mạng lưới thông tin toàn cầu bao gồm những máy tính được kết nối và giao tiếp với nhau thông qua một bộ các giao thức có sẵn

Internet:
* Internet được tạo thành từ một lượng lớn các mạng hoạt động độc lập được liên kết với nhau
* Internet là một hệ thống vật lý được tạo ra để di chuyển thông tin
* Internet cung cấp thông tin dưới dạng các **bits** (Bất kể là hình ảnh, âm thanh, mọi thứ trên Internet đều được biểu diễn và gửi đi dưới dạng các bit - Nguyên tử của những thông tin)

Băng thông (Bandwwidth): Công suất truyền tải tối đa của một thiết bị, băng thông được đo bằng bit rate(Số lượng bit có thể gửi được trong thời gian nhất định được đo bằng giây)

Độ trễ (Latency): Khoảng thời gian cần thiết để dữ liệu di chuyển từ nơi này đến nơi khác

Các loại cáp dùng để gửi thông điệp và tín hiệu:
* Dây Internet: Có thể gửi thông điệp ở khoảng cách ngắn. Không tốn kém chi phí nhưng lại dễ bị mất tín hiệu
* Cáp quang (sử dụng ánh sáng để truyền tin): Có thể gửi thông điệp rất nhanh và xa, không bị mất tín hiệu. Nhưng đổi lại thì rất tốn kém và khó sử dụng
* Tín hiệu vô tuyến: Dùng sóng radio để gửi các bíts (Dịch các bits sang sóng radio với tần số tương ứng, các máy nhận đảo ngược lại quá trình này), cách này chỉ có thể dùng trên di động và không thể đi xa được

**Địa chỉ IP và DNS:**

Giao thức (Protocol): Một bộ các quy tắc và tiêu chuẩn nổi tiếng mà nếu tất cả các bên đồng ý sử dụng nó sẽ cho phép họ giao tiếp mà không gặp rắc rối

Tất cả các thiết bị khác nhau trên Internet đều có 1 địa chỉ duy nhất. Một địa chỉ Internet là một dãy số, tương tự như số điện thoại hoặc 1 loại địa chỉ đường phố. Địa chỉ này là khác biệt với mỗi máy tính hoặc thiết bị sử dụng mạng

Hệ thống địa chỉ trên Internet (Tương tự với địa chỉ đường phố) là một phần của giao thức quan trọng nhất được sử dụng trong giao tiếp Internet và được gọi là giao thức Internet(IP - Internet Protocol). Một địa chỉ máy tính được gọi là địa chỉ IP

Hệ thống tên miền (DNS - Domain Name System): Liên kết các tên miền với các địa chỉ tương ứng. Máy tính sử dụng DNS để tra cứu tên miền và nhận địa chỉ IP tương ứng được sử dụng để kết nối máy tính với địa chỉ đích

**Gói tin, định tuyến và độ ổn định**

### 1.2 Ngôn ngữ lập trình
Trong chương này sẽ hướng tới việc học 2 ngôn ngữ lập trình là JavaScript và Go

[JavaScript](https://roadmap.sh/javascript)

[Go](https://roadmap.sh/golang)

Note: Phần ghi chú các thuật ngữ chung của 2 ngôn ngữ
* Phụ thuộc (Dependencies) là các thư viện / module/ package bên ngoài mà một đoạn mã hoặc dự án cần để hoạt động
* Biến là 1 kho chứa cho giá trị,
* Các đối tượng và hàm đều là biến
#### 1.2.1 JavaScript
Note:
* Nên kết thúc các dòng lệnh bằng dấu ```;```
* Luôn luôn sử dụng từ khóa ```let``` để khai báo biến
* Khi khai báo một biến thì javascript sẽ tạo chỗ cho nó trong bộ nhớ mặc dù chưa thực thi chương trình, sau đó để 1 placeholder cho biến đó với nội dung là undefined
##### a) Quản lý phụ thuộc trong JavaScript

Được quản lý bởi file package.json sử dụng NPM (Node Package Manager) bằng lệnh ```npm init```

Nếu muốn thêm một thư viện thì sử dụng lệnh ```npm install <ten_thu_vien>```
##### b) Khai báo biến
Khai báo biến bằng cách sử dụng từ khóa ```let``` hoặc ```var``` và ngay sau đó là tên biến

Ví dụ:
```
let myName;
var myAge;
```

**Khởi tạo giá trị**
```
myName = "Chris";
myAge = 37;
```

**Một số điểm khác nhau giữa ```var``` và ```let```:**
* Hoisting chỉ hoạt động với var
* Có thể khai báo biến cùng một biến nhiều lần nếu dùng var
* ```let``` và ```var``` đều có phạm vi giống nhau
* Khai báo bằng let không tạo thuộc tính trên globalThis khi được khai báo ở cấp cao nhất của một script
* Khai báo bằng let không tạo thuộc tính trên globalThis khi được khai báo ở cấp cao nhất của một script.

**Ghi đè biến**
```
myName = "Bob";
myAge = 40;
```

* Một số đặc điểm về const: const là một thùng chứa dữ liệu bất biến trong quá trình thực thi chương trình
##### c) Hoisting
Là quá trình mà trình thông dịch đưa các khai báo hàm, biến, lớp, hoặc import lên đầu scope của chúng trước khi thực thi chương trình
##### d) Quy tắc đặt tên biến
* Têm biến chỉ có thể chứa ký tự chữ số (a-z, A-Z, 0-9), dấu ```$``` và dấu ```_```
* Tên biến không thể bắt đầu bằng số
* Tên biến không thể chứa khoảng trắng
* Không được dùng từ khóa làm tên biến

Gợi ý đặt tên biến:
* Đặt tên biến đại diện cho chức năng của nó, ví dụ: ```username```
* Đừng đặt dài quá
* Dùng camel case (Viết hoa các chữ cái đầu tiên của từng từ trừ chữ đầu tiên) cho tên biến và screaming snake case (Viết hoa toàn bộ chữ cái và thay các khoảng trắng bằng dấu "_") cho hằng số

##### e) Phạm vi (Scope)
Scope quyết định khả năng truy cập của các biến, đối tượng và hàm trong các phần khác nhau của đoạn mã

JavaScript có 3 loại phạm vi:
* Phạm vi toàn cục: Là phạm vi bao bọc toàn bộ một tập tin dự án, một biến được khai báo bên ngoài một hàm sẽ có phạm vi toàn cục, một biến có phạm vi toàn cục có thể được truy cập từ bất kì đâu trong dự án
* Phạm vi khối: là phạm vi được bao bọc trong dấu ```{}```, biến được khai báo trong phạm vi khối không thể được truy cập bởi phần tử bên ngoài. Các biến được khai báo bằng ```var``` không thể có phạm vi khối
  
  Ví dụ:
  ```
  {
  let x = 2;
  }
  ```
* Phạm vi hàm: Là phạm vi nằm trong một hàm, bắt đầu từ đoạn khai báo tên hàm cho tới kết thúc của hàm đó. Tương tự như phạm vi khối, các biến được khai báo trong phạm vi hàm không thể được truy cập từ bên ngoài
  Ví dụ:
  ```
  function myFunction() {
  	var carName = "Volvo";   // Function Scope
  }
  ```

Nếu gán giá trị cho một biến chưa được khai báo, nó sẽ tự động trở thành biến toàn cục
```
let carName;
myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}
```
##### f) Kiểu dữ liệu
JavaScript là một ngôn ngữ lập trình động (là một loại ngôn ngữ lập trình mà kiểu dữ liệu của biến có thể thay đổi trong quá trình thực thi chương trình) với các kiểu dữ liệu động

**Các kiểu dữ liệu nguyên thủy** : Các kiểu dữ liệu được biểu diễn trực tiếp ở cấp thấp nhất của ngôn ngữ

Lưu ý: Toàn bộ các kiểu dữ liệu nguyên thủy (trừ null) có thể được kiểm tra kiểu dữ liệu bằng toán tử ```typeof```. ```typeof null``` trả về **Objects** nên phải dùng so sánh tuyệt đối ```=== null``` để kiểm tra 

* **String (kiểu chuỗi)**: Đại diện cho chữ và được được mã hóa dưới dạng một chuỗi các giá trị số nguyên không dấu 16 bit, đại diện cho các đơn vị mã UTF-16

Các chuỗi trong JavaScript là bất biến (một khi đã tạo thì không thể thay đổi)

String có thể được tạo ra bằng một chuỗi các ký tự, hoặc như một đối tượng sử dụng hàm khởi tạo ```String()```

Ví dụ:
```
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");
```

Các chuỗi ký tự có thể được định nghĩa bằng cách dùng các dấu như ```""```, ```''``` và ``` `` ```

Các phương thức xử lý chuỗi:
```https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/String```

* **undefined**: kiểu dữ liệu nguyên thủy trong JavaScript. Khi một biến được khai báo nhưng chưa được khởi tạo hoặc được gán giá trị, khi đó nó sẽ được lưu trữ là ```undefined```.

Lưu ý: undefined là 1 placeholder tạm thời cho tới khi một biến được gán giá trị nên KHÔNG bao giờ được dùng ```a = undefined;```

* **Null**: là một loại giá trị đặc biệt, đại diện cho sự "vắng mặt" của bất kỳ dữ liệu của đối tượng nào.

Null không phải là Undefined, khi một dữ liệu được khai báo nhưng không được gán giá trị thì đó là undefined, nhưng khi mộ biến được khai báo và gán null thì đó là null

* **Symbol**: là một kiểu dữ liệu nguyên thủy mới được thêm vào, symbol không có dạng kí tự
  Khai báo biến có kiểu dữ liệu symbol: ```let s = Symbol('foo');```, nếu muốn chia sẻ các Symbol thì sử dụng ```Symbol.for()``` Ví dụ: ```let ssn = Symbol.for('ssn')```. Phương thức Symbol.for() đầu tiên tìm kiếm những symbol với khóa ssn trong **global symbol registry**, nếu tồn tại giá trị thì sẽ trả về còn không thì tạo symbol mới
  
  Symbol tạo ra giá trị khác nhau mỗi lần gọi ```console.log(Symbol() === Symbol()); // false```

  Symbol có thể nhận 1 đối số để mô tả chính nó

  Dùng console.log sẽ gọi phương thức toString() để gọi symbol ra ```console.log(firstName); // Symbol(first name)```

  Vì Symbol là kiểu dữ liệu nguyên thủy nên có dùng hàm ```type of``` để kiểm tra ```console.log(typeof firstName);```

**Công dụng của symbol**
* Sử dụng symbol cho giá trị duy nhất:
  Ví dụ: Các trạng thái của một tác vụ như open, in progress, completed, canceled... Thì có thể sử dụng symbol thay vì String
  ```
  let statuses = {
    OPEN: Symbol('Open'),
    IN_PROGRESS: Symbol('In progress'),
    COMPLETED: Symbol('Completed'),
    HOLD: Symbol('On hold'),
    CANCELED: Symbol('Canceled')
  };
  // complete a task
  task.setStatus(statuses.COMPLETED);
  ```
* Sử dụng symbol như tên thuộc tính:
```
let statuses = {
    OPEN: Symbol('open'),
    IN_PROGRESS: Symbol('in-progress'),
    COMPLETE: Symbol('complete'),
    HOLD: Symbol('hold'),
    CANCELED: Symbol('canceled')
}

let status = Symbol("status");

let task = {
    status: statuses.OPEN,
    desciption: "test"
}

console.log(task)
```

Để lấy các thuộc tính enumerable của một đối tượng, bạn sử dụng phương thức ```Object.keys()```, ví dụ: ```console.log(Object.keys(task)); // ["description"]```

Để lấy thuộc tính của toàn bộ đối tượng, sử dụng ```Object.getOwnPropertyNames()```

Để lấy toàn bộ symbols của đối tượng, bạn sử dụng hàm ```Object.getOwnPropertySymbols()```

**Well-known symbols**(Ký hiệu nổi tiếng): ES6 cung cấp các symbol được định nghĩa sẵn, gọi là well-known symbols (các symbol nổi tiếng). Các well-known symbol đại diện cho những hành vi phổ biến trong JavaScript. Mỗi well-known symbol là một thuộc tính tĩnh (static property) của đối tượng Symbol.

[Xem các Well-known symbols ở đây](https://www.javascripttutorial.net/symbol/)

* **Boolean**:Chỉ có 2 giá trị True hoặc False, thường được dùng trong kiểm thử các điều kiện, như là ```if...else``` và ```while```...
  Các toán tử được xác định là false: undefined, null, 0, -0, NaN, 0n, ""

  Các toán tử được xác định là true: các numbers, BigInts, strings, Symbols, all Objects

  Chuyển một giá trị sang boolean: Sử dụng toán tử ```!!```, hoặc hàm Boolean()
* **number**: kiểu dữ liệu ```number``` trong JavaScript đại diện cho số chấm động (floating - point numbers)
  Hàm khởi tạo ```Number``` cung cấp nhiều phương thức để làm việc với numbers, và các kiểu dữ liệu khác có thể được chuyển đổi thành numbers sử dụng hàm ```Numbers()```
  ```
  let num1 = 255; // integer
  let num2 = 255.0; // floating-point number with no fractional part
  let num3 = 0xff; // hexadecimal notation
  let num4 = 0b11111111; // binary notation
  let num5 = 0.255e3; // exponential notation

  console.log(num1 === num2); // true
  console.log(num1 === num3); // true
  console.log(num1 === num4); // true
  console.log(num1 === num5); // true
  ```
* **BigInt**: được tạo ra bằng cách thêm ```n``` vào đuôi của một chuỗi số nguyên bất kỳ, hoặc sử dụng hàm ```BigInt()``` và truyền đối số là số nguyên hoặc chuỗi
  ```
  const previouslyMaxSafeInteger = 9007199254740991n;

	const alsoHuge = BigInt(9007199254740991);
	// 9007199254740991n
	
	const hugeString = BigInt("9007199254740991");
	// 9007199254740991n
	
	const hugeHex = BigInt("0x1fffffffffffff");
	// 9007199254740991n
	
	const hugeOctal = BigInt("0o377777777777777777");
	// 9007199254740991n
	
	const hugeBin = BigInt(
	  "0b11111111111111111111111111111111111111111111111111111",
	);
	```
Tuy các giá trị ```Bigint``` khá giống với ```Number```, nhưng có một số khác biệt chính giữa 2 kiểu dữ liệu này, ```BigInt``` không thể được sử dụng với các phương thức trong đối tượng ```Math``` và không thể được dùng với ```Number``` trong các phép toán, 

BigInt có thể thực hiện các phép toán học nhưng phải đảm bảo các toán hạng đều cùng 1 kiểu dữ liệu
* Arithmetic operators: +, -, *, /, %, **
* Bitwise operators: >>, <<, &, |, ^, ~
* Unary negation (-)
* Increment/decrement: ++, --

Các phép so sánh trả về boolean cho phép trộn lẫn kiểu numbers và BigInts
* Relational operators and equality operators: >, <, >=, <=, ==, !=, ===, !==
* Logical operators only rely on the truthiness of operands
```
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
const maxPlusOne = previousMaxSafe + 1n; // 9007199254740992n
const theFuture = previousMaxSafe + 2n; // 9007199254740993n, this works now!
const prod = previousMaxSafe * 2n; // 18014398509481982n
const diff = prod - 10n; // 18014398509481972n
const mod = prod % 10n; // 2n
const bigN = 2n ** 54n; // 18014398509481984n
bigN * -1n; // -18014398509481984n
const expected = 4n / 2n; // 2n
const truncated = 5n / 2n; // 2n, not 2.5n
```
##### g) Toán tử typeof
```typeOf``` được dùng để tìm kiểu dữ liệu của một biến trong JavaScript. Nó trả về một chuỗi tương ứng với kiểu của giá trị được truyền vào. 

```
console.log(typeof 42);
// Expected output: "number"

console.log(typeof "blubber");
// Expected output: "string"

console.log(typeof true);
// Expected output: "boolean"

console.log(typeof undeclaredVariable);
// Expected output: "undefined"
```
Cú pháp ```typeof operand```, output là kiểu dữ liệu tương ứng với giá trị được truyền vào, riêng ```null``` thì trả về ```Object```(trong các phiên bản đầu tiên của JS, các giá trị được biểu diễn theo cặp tag và value, các đối tượng có tag là 0 và khi đó null được biểu diễn bằng con trỏ NULL có giá trị là ```0x00```, nên trình JS hiểu null là một đối tượng)

**Lưu ý**:
Tất cả các hàm khởi tạo được gọi với từ khóa ```new``` sẽ trả về giá trị không nguyên thủy, ngoại lệ duy nhất là ```Function```.

Ví dụ:
```
const str = new String("String");
const num = new Number(100);

typeof str; // "object"
typeof num; // "object"

const func = new Function();

typeof func; // "function"
```

```typeof``` có độ ưu tiên hành động cao hơn các toán tử nhị phân, do vậy cần phải bọc các 

```
function type(value) {
  if (value === null) {
    return "null";
  }
  const baseType = typeof value;
  // Primitive types
  if (!["object", "function"].includes(baseType)) {
    return baseType;
  }

  // Symbol.toStringTag often specifies the "display name" of the
  // object's class. It's used in Object.prototype.toString().
  const tag = value[Symbol.toStringTag];
  if (typeof tag === "string") {
    return tag;
  }

  // If it's a function whose source code starts with the "class" keyword
  if (
    baseType === "function" &&
    Function.prototype.toString.call(value).startsWith("class")
  ) {
    return "class";
  }

  // The name of the constructor; for example `Array`, `GeneratorFunction`,
  // `Number`, `String`, `Boolean` or `MyCustomClass`
  const className = value.constructor.name;
  if (typeof className === "string" && className !== "") {
    return className;
  }

  // At this point there's no robust way to get the type of value,
  // so we use the base implementation.
  return baseType;
}
```
##### h) Đối tượng (object)
Là cấu trúc dữ liệu cho phép chùng ta có các cặp key-value, để chúng ta có các key độc nhất và mỗi key được liên kết với một giá trị có thể thuộc bất kì kiểu dữ liệu nào trong JS. Ví dụ: một cây bút có nhiều thuộc tính như màu sắc, thiết kế, chất liệu mà nó được làm từ... Tương tự như vậy, các đối tượng JS có thể có các thuộc tính để điều chỉnh hành vi của chúng.

* **Tạo đối tượng mới**
  Có nhiều cách để tạo một đối tượng như sử dụng ```object initializer```, hoặc sử dụng hàm khởi tạo và sau đó tạo một đối tượng bằng cách sử dụng toán tử ```new```

**Sử dụng object initializers**
```
const a = {
    a: 221,
    23: "Hello",
    45: 12313n
}
```

```
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
```
Mỗi tên thuộc tính trước dấu ```:``` là một định danh (identifier), nó có thể là một biến, chữ số hoặc là một chuỗi. Các giá trị sau dấu ```:``` là các biểu thức được gán vào tên thuộc tính. 

**Sử dụng hàm khởi tạo**
Định nghĩa kiểu đối tượng bằng cách viết một hàm khởi tạo, sau đó tạo thể hiện của đối tượng bằng cách dùng new dùng ```new```

```
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car("Eagle", "Talon TSi", 1993);
```
**Sử dụng phương thức Object.create()**
Phương thức này rất hữu dụng, vì nó cho phép bạn chọn mẫu đối tượng cho đối tượng bạn muốn tạo mà khồn cần một hàm khởi tạo
```
// Animal properties and method encapsulation
const Animal = {
  type: "Invertebrates", // Default value of properties
  displayType() {
    // Method which will display type of Animal
    console.log(this.type);
  },
};

// Create new animal type called animal1
const animal1 = Object.create(Animal);
animal1.displayType(); // Logs: Invertebrates

// Create new animal type called fish
const fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Logs: Fishes
```

**Truy cập vào các thuộc tính của đối tượng**
Ví dụ bên dưới tạo một đối tượng có tên là ```myCar```, với các thuộc tính được đặt tên lần lượt là ```make```, ```model``` và ```year``` với các giá trị tương ứng là ```"Ford"```, ```"Mustang"```, ```1969```.
```
const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
```

Có 2 cách để truy cập các thuộc tính là sử dụng dot natation và bracket natation
```
// Dot notation
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

// Bracket notation
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;
```
* **Duyệt các thuộc tính**
  Có 3 cách chính, sử dụng vòng lặp ```for...in``` (Phương thức này di chuyển qua tất cả các chuỗi có thể duyệt của một đối tượng và cũng như các biểu thức đi kèm với nó), ```Object.keys()```(Phương thức này chỉ trả về một mảng với các thuộc tính của đối tượng), ```Object.getOwnPropertyNames()``` (Phương thứ này trả về một mảng chứa tất cả các tên thuộc tính, dù cho chings có duyệt được hay không)

```
function showProps(obj, objName) {
  let result = "";
  Object.keys(obj).forEach((i) => {
    result += `${objName}.${i} = ${obj[i]}\n`;
  });
  console.log(result);
}
```
```
function listAllProperties(myObj) {
  let objectToInspect = myObj;
  let result = [];

  while (objectToInspect !== null) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    objectToInspect = Object.getPrototypeOf(objectToInspect);
  }

  return result;
}
```
* **Xóa thuộc tính**
  Sử dụng toán tử ```delete```
```
// Creates a new object, myObj, with two properties, a and b.
const myObj = { a: 5, b: 12 };

// Removes the a property, leaving myObj with only the b property.
delete myObj.a;
console.log("a" in myObj); // false
```
* **Định nghĩa phương thức**
  Giống như phương thức bình thường
```
objectName.methodName = functionName;

const myObj = {
  myMethod: function (params) {
    // do something
  },

  // this works too!
  myOtherMethod(params) {
    // do something else
  },
};
```
#### 1.2.2 Go
##### a) Quản lý phụ thuộc trong Go

Được quản lý bởi file ```go.mod``` sử dụng lênh ```go mod init <tên_module>```, tên_module ở đây là đường dẫn của module

Để thêm 1 thư viện trong Go thì phải import thư viện đó (Thông tin các thư viện của Go nằm ở trang web sau ```pkg.go.dev```) và sử dụng lệnh ```go mod tidy``` để tải các thư viện cần thiết về

![Go mod tidy](md_assets/Go_CaiDatThuVien.png)



##### b) Cơ bản về Go
* Chương trình bắt đầu ở file có khai báo ```package main```
* Có 2 kiểu khai báo các gói:
```import "fmt"```
```
import (
	"fmt"
	"math"
)
```
* Cú pháp khai báo hàm, sử dụng từ khóa ```func```, ngoài ra còn có thể quy định tham số và kiểu dữ liệu theo cú pháp ```<ten_bien> <kieu_du_lieu>``` hoặc ```<ten_bien>, <ten_bien> <kieu_du_lieu>``` nếu cả 2 tham số có cùng kiểu dữ liệu. Nếu hàm có trả về kết quả thì phải quy định kiểu trả về ngay sau khi khai báo tên biến
Ví dụ:
```
func add(x int, y int) int {
	return x + y
}
```
* Giá trị trả về được khai báo sẵn: Giá trị trả về của Go có thể được khai báo sẵn (Tham số được quy định ở đầu hàm).
```
func split(sum int) (x, y int){
    x = sum * 4 / 9
    y = sum - x
    return
}
```
* Khai báo biến
Khai báo theo cú pháp ```var <ten_bien> <kieu_du_lieu>```

Ví dụ:
```
var c, python, java bool

func main() {
	var i int
	fmt.Println(i, c, python, java)
}
```

Ví dụ khai báo biến với giá trị mặc định:
```
var i, j int = 1, 2
```

**Lưu ý**: bên trong một hàm có thể dùng cú pháp ```:=``` để thay thế cho từ khóa ```var``` với kiểu dữ liệu không xác định

Ví dụ:

```
func main() {
	var i, j int = 1, 2
	k := 3
	c, python, java := true, false, "no!"

	fmt.Println(i, j, k, c, python, java)
}
```

