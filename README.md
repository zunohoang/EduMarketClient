<div align="center">

<h1>Chào mừng bạn đến với dự án Edumarket</h1>

</div>

# Dự án

## Mã nguồn:
+ **Frontend**: [FE_Source](https://github.com/zunohoang/EduMarketClient)
+ **Backend**: [BE_Source](https://github.com/zunohoang/EduMarketServer)

## Giới thiệu

![alt text](https://edu-market.vercel.app/assets/banner-B_g_USSP.png)


Đây là một dự án mã nguồn mở của chúng tôi vì mục đích giáo dục...
bạn có thể trực tiếp trải nghiệm tại 
```edu-market.vercel.app```

Dự án được tổ chức theo mô hình Client Side hoàn toàn, trong bản cập nhật tương lai chúng tôi sẽ sử dụng Nextjs cho dự án để dự án vừa Client Side và Server Side.


## Công nghệ sử dụng
- **Frontend**: ReactJs, Tailwind CSS
- **Backend**: Node.js, Expressjs
- **Database**: MongoDB
- **Auth**: JWT (JSON Web Tokens)

 ## Đóng góp
Chúng tôi hoan nghênh mọi đóng góp từ cộng đồng. Để đóng góp, bạn có thể:

1. Fork dự án này.
2. Tạo một nhánh mới (`git checkout -b feature/ten-tinh-nang`).
3. Commit các thay đổi của bạn (`git commit -m 'Thêm tính năng ABC'`).
4. Push lên nhánh (`git push origin feature/ten-tinh-nang`).
5. Tạo một Pull Request.

Cảm ơn bạn đã quan tâm và đóng góp cho dự án!



# Cách sử dụng dự án

## 1 Đối với người dùng 

### Cách chạy dự án

- Đầu tiên bạn hãy truy cập [https://github.com/zunohoang/EduMarketServer]. Đây là mã nguồn backend của dự án, hãy làm theo các hướng dẫn ở readme để cài đặt và chạy nó. Sau khi `npm run dev` không có lỗi xãy ra nó thì chuyển qua những bước phía dưới (hãy liên hệ với tôi nếu bạn gặp khó khăn @zunohoang)
- Đảm bảo rằng bạn đã cài đặt Node.js và npm.
- Clone dự án về máy `git clone [url-repo]`.
- Di chuyển vào thư mục dự án `cd EduMarketClient`.
- Cài đặt tất cả các gói cần thiết `npm install`.
- Tạo file `.env` để tạo biến môi trường
  + Trong đấy sẽ có biến VITE_API sẽ là đường dẫn tới máy chủ api ví dụ https://api.example.com
- Chạy dự án `npm run dev`.


## 2 Đối với developer người đóng góp chính của dự án

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
