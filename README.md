# cú pháp Jquery
$ : cú pháp bắt đầu với JQuery

- $(this) : là phần tử tham chiếu hiện tại
- $("p") : tất cả phần tử p
- $(".test") : phần tử có class test
- $("#test") : phần tử có id là test
* các kiểu click 
    - click : click 1 lần
    - dblclick : click 2 lần
    - mouseenter() : sự kiện howver vào thực hiện  funtion
    - howver : khi đưa chuột vào thì thực hiện funtion
    - focus : dùng cho với các thẻ input như : input , textarea,... có thể thay đổi màu nền
    - blur : sử dụng khi phần tử mất focus
    - mouseleave : được sử dụng để sử lý hành động khi con chuột rời khỏi vị trí phần tử
* các method cần biết
    - hide(): ẩn phần tử hiện tại
    - $(document).ready() : sẵn sàng chuẩn bị cho các thao tác khác
    - on() : là phương thức đính kèm để thực hiện 1 hay nhiều trình sử lý
    - hide(n) : sử dụng để ẩn 1 html, phần tử sẽ bị ẩn bằng thuộc tính display : none
                + tham số n là thời gian ẩn đi
    - toggle (): dùng để chuyển đổi trạng thái hiển thị của phần tử 
    - show():  sử dụng để hiển thị 1 html , nó sẽ thiết lập thuộc tính display 
    - fadeIn (n): hiển thị phần tử với hiệu ứng mờ 
                + n: thời gian hiên thị 
    - fadeOut(n): ẩn phần tử với hiệu ứng mờ
                + n: thời gian ẩn
    -fadeToggle(n) : chuyển đổi hiển thị và ẩn với hiệu ứng mờ
                + n : thời gian chuyển đổi
    - slideDown(n) : tạo hiệu ứng hiện thị phần tử bằng cách trượt xuống , làm cho phần tử ở trạng thái ẩn / hiện
     - slideUp(n) : tạo hiệu ứng hiện thị phần tử bằng cách trượt lên , làm cho phần tử ở trạng thái ẩn / hiện
     - animate() : cho phép bạn thực hiện các hiệu ứng tuỳ chỉnh trên các thuộc tính CSS của phần tử 
     -stop() : được sử dụng để dừng các hiệu ứng đang diễn ra trên 1 phần tử . khi bạn gọi stop() jQuery sẽ dừng 
                ngay lập tức các hiệu ứng đang chuyển động
    - Chaining: là kỹ thuật cho phép bạn thực hiện nhiều phương thức trong cùng 1 đối tượng mà không cần 
                gọi lại biến hoặc lựa chọn lại phần tử . giúp mã trở nên ngắn gọn hơn
    -  text(): lấy hoặc thiết lập nội dung văn bản của 1 hoặc nhiều phần tử, dùng để thao tác với văn bản mà không có html
    - html (): lấy hoặc thiết lập nội dung html của 1 hoặc nhiều phần tử html, sử dụng thao tác với html cho phép bạn thêm các phần tử con hoặc cấu trúc html khác
    - val (): lấy hoặc thiết lập các giá trọ cho thẻ input, textarea, hoặc select. Chủ yếu sử dụng các trường hợp nhập liệu
    - append() : thêm phần tử html mới vào cuối phần tử chỉ định 
    -prepend() : thêm phần từ html vào đầu phần tử chỉ định
    -after()  : thêm phần từ html vào sau phần từ chỉ định
    -before() : thêm phần tử html vào trước phần tử chỉ định
    - remove() : xoá phần từ khỏi DOM cùng tất cả sự kiênj và dữ liệu liên quan đến  nó
    - empty() : xoá tất cả các phần tử con bên trong phần tử chỉ định , giữ lại phần tử cha
    -addClass() : thêm 1 hoặc nhiều lớp css vào phần tử cha
    - removeClass() : xoá 1 hoặc nhiều lớp css khỏi phần tử
    - toggleClass() : thêm lớp css nếu nó chưa có , và xoá lớp css nếu nó đã có . hữu ích cho chuyển đổi hiệu ứng
    - Traversing (duyệt) : cho phép bạn tìm kiếm và thao tác với các phần tửu DOM .
    - parent() : lấy ra phần tử cha bao quanh nó
    -find() : tìm kiếm phần tử con ở mọi cấp bên trong phần tửu đã chọn
    - siblings() : lấy ra các phần tử cùng cấp với phần tử đã chọn
    - next() : lấy ra 1 phần tử sau phần tử đã chọn
    - nextAll() : lấy ra tất cả các phần tử sau phần tử đã chọn
    - nextUntil() : lấy ra tất cả các phần tử nằm sau phần tử đã chọn đến (nhưng không  bao gồm phần tử chỉ định)
                    ex: $('.current').nextUntil('.stop'); // Lấy tất cả các phần tử nằm sau .current cho đến .stop
    - prev() : lấy phần tử ngay trước phần tử đã chọn
    -prevAll() : lấy ra tất cả các phần tử nằm trước phần tử đã chọn
    - prevUntil() : lấy ra tất cả các phần tử nằm trước phần tử đã chọn đến phần tử chỉ định
                    ex: $('.current').prevUntil('.stop'); // Lấy tất cả các phần tử nằm trước .current cho đến .stop
    - first(): lấy ra phần tử đầu tiên trong tập hợp các phần tử đã chọn
    - last() : lấy ra phần tử cuối cùng trong tập hợp phần tử đã chọn
    - eq (n) : lấy ra phần từ tại vị trí chỉ định  trong tập hợp các phần tử đã chọn (n : bắt đầu từ 0)
    - filter() : lọc các phần tử trong tập hợp dựa trên 1 bộ chọn hoặc 1 hàm điều kiện
    - not() : lọc ra các phần tử hông khớp vợi bộ chọn chỉ định
    - noConflict() : dùng để giải phóng biến $ cho phép sử dụng jQuery thay cho $ để làm tránh xung đột với các thư viện khác

