const express = require("express");
const path = require("path");
const app = express();

// template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

// static files
app.use(express.static(path.join(__dirname, "public")));

// routes
const courseRoutes = require("../routes/courseRoutes");
app.use("/", courseRoutes);

// home route
app.get("/", (req, res) => {
    res.render("home");
});

// server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});