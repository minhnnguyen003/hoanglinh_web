# Website Dịch vụ Nông sản Hoàng Linh

[English](README.md)

Đây là website Nuxt của Công ty Dịch vụ Nông sản Hoàng Linh, giới thiệu doanh nghiệp, các nguyên liệu thức ăn chăn nuôi, tin tức và thông tin liên hệ.

## Công nghệ sử dụng

- Nuxt 4 và Vue 3
- Vite
- Sass
- Các module Nuxt Sitemap và Robots

## Yêu cầu môi trường

- Node.js `^20.19.0` hoặc `>=22.12.0`
- npm

## Bắt đầu

Cài đặt dependencies:

```bash
npm install
```

Chạy máy chủ phát triển tại `http://localhost:3000`:

```bash
npm run dev
```

## Các script có sẵn

| Lệnh | Mô tả |
| --- | --- |
| `npm run dev` | Chạy máy chủ phát triển Nuxt. |
| `npm run build` | Tạo bản build production. |
| `npm run preview` | Xem trước bản build production trên máy local. |
| `npm run start` | Khởi chạy máy chủ Nitro đã được tạo. |
| `npm run generate` | Tạo phiên bản tĩnh của website. |
| `npm run check:commit` | Chạy kiểm tra bắt buộc trước khi commit. |

## Kiểm tra chất lượng

Repository dùng Git hook `pre-commit` của Husky. Mỗi lần commit thông thường, hook sẽ chạy:

```bash
npm run check:commit
```

Hiện tại lệnh này chạy `npm run build`; nếu build lỗi, Git sẽ hủy commit. Dự án chưa cấu hình bộ kiểm thử tự động với `npm test`.

Bạn có thể chạy thủ công cùng kiểm tra này trước khi commit:

```bash
npm run check:commit
```

## Cấu trúc dự án

```text
app/
  assets/        # Ảnh và mã Sass
  components/    # Các Vue component dùng chung và trang chủ
  layouts/       # Layout của ứng dụng
  pages/         # Route theo cấu trúc tệp
public/          # Tệp tĩnh public
.husky/          # Git hook
```

## Build production

Tạo và xem trước bản build trên máy local:

```bash
npm run build
npm run preview
```
