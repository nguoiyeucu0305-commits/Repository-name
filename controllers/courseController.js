// DATA GIẢ (fake database)
const courses = [
    {
        id: 1,
        name: "JavaScript cơ bản",
        lessons: [
            { id: 1, title: "Biến là gì", video: "video1.mp4" },
            { id: 2, title: "Hàm trong JS", video: "video2.mp4" }
        ]
    },
    {
        id: 2,
        name: "NodeJS",
        lessons: [
            { id: 1, title: "Express cơ bản", video: "video3.mp4" },
            { id: 2, title: "Middleware", video: "video4.mp4" }
        ]
    }
];

// 👉 Danh sách khóa học
exports.getCourses = (req, res) => {
    res.render("courses", { courses });
};

// 👉 Chi tiết khóa học
exports.getCourseDetail = (req, res) => {
    const courseId = req.params.id;

    const course = courses.find(c => c.id == courseId);

    if (!course) {
        return res.send("Không tìm thấy khóa học");
    }

    res.render("courseDetail", { course });
};