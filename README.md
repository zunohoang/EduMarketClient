# Cách sử dụng dự án

## 1 Đối với người dùng (Cập nhật trong tương lai)

## 2 Đối với developer

- Đầu tiên clone dự án về máy `git clone [url-repo]`

### Cách chạy dự án

- Để cài đặt tất cả các gói sử dụng `npm i`
- Để chạy dự án `npn run dev`

### Cách push code

- Khi push code lên thì phải tạo nhánh mới và push vào nhánh mới không được push vào main
  `git checkout -b [tên nhánh mới]`
- Sau khi push lên nhánh mới thì tạo yêu cầu hợp nhất nhánh
- Sau khi được Leader dự án merge nhánh thì dùng lệnh sau để pull code về:
  `git checkout main`
  `git pull`
