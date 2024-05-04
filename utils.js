// Import module os
const os = require("os");

// Sử dụng hàm của module os để lấy thông tin về hệ thống
console.log("Hostname:", os.hostname()); // Lấy tên host
console.log("Platform:", os.platform()); // Lấy nền tảng hệ điều hành
console.log("Total memory:", os.totalmem() / (1024 * 1024) + " MB"); // Lấy tổng bộ nhớ hệ thống
console.log("Free memory:", os.freemem() / (1024 * 1024) + " MB"); // Lấy bộ nhớ trống
console.log("CPU cores:", os.cpus().length); // Lấy số lượng CPU core
