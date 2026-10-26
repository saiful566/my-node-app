console.log("=========================================");
console.log("Hello from Docker! Node.js version:", process.version);
console.log("=========================================");

// সার্ভারটি যেন বন্ধ না হয়ে সচল থাকে তার জন্য একটি ইন্টারভাল
setInterval(() => {
    console.log("Your Docker server is running smoothly...");
}, 5000);
