# NODE LEARN RESPONSIVE

## Điểm breakpoint thường gặp

- 320 px Màn hình chiều dọc cho smartphone nhỏ (VD iPhone 5)
- 480 px Màn hình chiều ngang cho smartphone nhỏ
- 640 px Màn hình chiều ngang cho smartphone vừa
- 768 px Màn hình chiều dọc cho tablet (VD: iPad)
- 1024 px Màn hình chiều ngang cho tablet (VD: iPad), hoặc chiều dọc cho tablet lớn (VD iPad Pro)

Với vô số breakpoint như vậy, thì làm sao ta có thể hiển thị chính xác từng loại màn hình được? thật ra giải pháp rất đơn giản, ta sử dụng chiều rộng cố định (pixel - px) cho PC và sử dụng phần trăm (percent - %) cho các thiết bị Tablet và SP.

## Flex

https://flexbox.help/

```css
ul,
li {
  list-style: none;
  padding: 0;
}

ul {
  border: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap; /* xác định các item có được wrap lại hay không, cụ thể là mỗi hàng chỉ được phép chứa các item sao cho tổng chiều rộng của các item sẽ nhỏ hơn chiều rộng của list, các item tiếp theo sẽ sắp xếp ở hàng tiếp theo. */
  justify-content: space-between; /* tự động linh hoạt các item, sắp xếp đều các khoảng cách giữa các item, sao cho tổng chiều rộng các item và khoảng cách sẽ bằng với chiều rộng của list. */
  margin: 0 auto;
  width: 640px;
}

ul li {
  background-color: #a4e7fd;
  margin-bottom: 10px;
  padding: 10px 0;
  text-align: center;
  width: 150px;
}
```

## Responsive paragraph

```css
div {
  margin: 0 auto; /* thuộc tính này giúp cho thành phần div vào giữa */
  border: 1px solid #ccc;
  width: 100%;
  max-width: 600px; /* ví dụ chiều rộng lớn nhất theo design */
}
```

## Định nghĩa về float

Từ những ví dụ về float: left và float: right ta có thể rút ra kết luận về thuộc tính float như sau:

- Thành phần nào sử dụng float sẽ được giải phóng vùng không gian, vùng không gian này sẽ trở thành vùng trống, và sẽ bị vùng không gian của những thành phần liền kề nó lập tức chiếm lấy.
- Khi sử dụng float, các thành phần không chồng chập lên nhau, mà sẽ sắp xếp vị trí tùy thuộc vào chiều rộng của vùng trống.
- Khi sử dụng float: left, vùng không gian của thành phần sẽ được giải phóng và thành phần sẽ trôi sang trái.
- Khi sử dụng float: right, vùng không gian của thành phần sẽ được giải phóng và thành phần sẽ trôi sang phải.

## Thủ thuật clearfix

## position

1. position: relative;

- vị trí theo mốc vùng hiển thị của chính nó

2. position: absolute;

- định vị trí tuyệt đối cho thành phần
- sẽ được tính theo vùng hiển thị của thành phần bao ngoài nó. (phần ngoài phải được xác định với thuộc tính position: relative;)
- nếu không xác định được vị trí vùng ngoài thì nó sẽ lấy root html là mốc

3. position: fixed;

- dùng để fix cứng (vd: fix menu)
