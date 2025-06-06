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

Lưu ý: undefined là 1 placeholder tạm thời cho tới khi một biến được gán giá trị
nên KHÔNG bao giờ được dùng ```a = undefined;```
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

