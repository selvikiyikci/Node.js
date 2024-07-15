const express = require("express");
const app = express();
app.use("/blog/:blogid/users/:username", function (req, res) {
    console.log(req.params.blogid);
    console.log(req.params.username);
    res.send("blog detay sayfası")
 
 });

 app.use("/blog", function (req, res) {
    res.send("blog listesi")

});



app.use("/", function (req, res, next) {
    res.send("anasayfa")
    next();

});


app.listen(4000, function () {

    console.log("listening on port 4000");
});