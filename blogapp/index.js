const express = require("express");
const app = express();

app.use(function(req, res){

    res.end("hello world");

});
app.listen(3000, function(){

    console.log("listening on port 3000");
});