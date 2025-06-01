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
#### 1.2.1 JavaScript
##### a) Quản lý phụ thuộc trong JavaScript

Được quản lý bởi file package.json sử dụng NPM (Node Package Manager) bằng lệnh ```npm init```

Nếu muốn thêm một thư viện thì sử dụng lệnh ```npm install <ten_thu_vien>```
#### 1.2.2 Go
##### a) Quản lý phụ thuộc trong Go

Được quản lý bởi file ```go.mod``` sử dụng lênh ```go mod init <tên_module>```, tên_module ở đây là đường dẫn của module

Để thêm 1 thư viện trong Go thì phải import thư viện đó (Thông tin các thư viện của Go nằm ở trang web sau ```pkg.go.dev```) và sử dụng lệnh ```go mod tidy``` để tải các thư viện cần thiết về

![Go mod tidy](md_assets/Go_CaiDatThuVien.png)



