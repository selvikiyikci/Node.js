const express = require("express");
const app = express();
const path = require("path");
app.use("/blog/:blogid", function (req, res) {
    console.log(__dirname);
    console.log(__filename);
    res.send("blog detay sayfası");

    res.sendFile(path.join(__dirname,"views/users", "blog-details.html"));

});

app.use("/blog", function (req, res) {
    res.sendFile(path.join(__dirname,"views/users", "blogs.html"));


});



app.use("/", function (req, res, next) {
    res.sendFile(path.join(__dirname,"views/users", "index.html"));


});


app.listen(4000, function () {

    console.log("listening on port 4000");
});