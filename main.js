// Nhập module 'events' để sử dụng EventEmitter
const EventEmitter = require("events");

// Tạo một lớp mới kế thừa từ EventEmitter
class MyEmitter extends EventEmitter {}

// Tạo một đối tượng emitter mới từ lớp vừa tạo
const myEmitter = new MyEmitter();

// Đăng ký một listener (người nghe) cho sự kiện 'greet'
myEmitter.on("greet", (name) => {
  console.log(`Xin chào, ${name}!`);
});

// Phát ra sự kiện 'greet' với tham số là tên người được chào
myEmitter.emit("greet", "Nguyên");
