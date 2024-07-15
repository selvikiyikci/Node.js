const express = require("express");
const app = express();

app.use(function(req, res){

    res.end("anasayfa");

});
app.listen(3000, function(){

    console.log("listening on port 3000");
});