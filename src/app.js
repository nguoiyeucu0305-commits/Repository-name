const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
// template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

// static files
app.use(express.static(path.join(__dirname, "../public")));

// routes
const courseRoutes = require("../routes/courseRoutes");
app.use("/", courseRoutes);

// home route
app.get("/", (req, res) => {
    res.render("home");
});
app.get("/login",(req,res)=>{res.render("login");});
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "123") {
        res.send("Đăng nhập thành công");
    } else {
        res.send("Sai tài khoản");
    }
});
// server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

// Kết nối MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Course")
  .then(() => console.log("Kết nối MongoDB thành công!"))
  .catch(err => console.log("Lỗi kết nối:", err));
