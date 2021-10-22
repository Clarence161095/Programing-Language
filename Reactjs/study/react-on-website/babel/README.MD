Thêm JSX vào Project

Bước 1: Chạy npm init -y (nếu thất bại, đây là link hướng dẫn cách sửa)
Bước 2: Chạy npm install babel-cli@6 babel-preset-react-app@3

npx babel --watch src --out-dir . --presets react-app/prod
