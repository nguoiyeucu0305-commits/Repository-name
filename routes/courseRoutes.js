const express = require("express");
const router = express.Router();

router.get("/courses", (req, res) => {
    res.render("courses");
   
});
module.exports = router;
router.get("/course/:id", (req, res) => {
    res.render("courseDetail", {
        courseId: req.params.id
    });
});