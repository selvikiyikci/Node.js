const express = require("express");
const router  = express.Router();
const path = require("path");



router.use("/blogs/:blogid", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/users", "blog-details.html"));


});



router.use("/blogs", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/users", "blogs.html"));


});



router.use("/", function (req, res, next) {
    res.sendFile(path.join(__dirname, "../views/users", "index2.html"));


});

module.exports= router;
