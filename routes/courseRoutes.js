const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

// Danh sách khóa học
router.get("/courses", courseController.getCourses);

// Trang chi tiết khóa học (id động)
router.get("/course/:id", courseController.getCourseDetail);

// Trang học
router.get("/learn/:id", (req, res) => {
    const id = req.params.id;
    // Nếu bạn có dữ liệu từ DB thì thay bằng Course.findById(id)
    const course = courses.find(c => c.id == id);

    res.render("learn", { course });
});

// Xuất router sau khi định nghĩa xong
module.exports = router;
