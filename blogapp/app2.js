const express = require("express");
const app = express();
const path = require("path");

const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public"))); 
     
app.use("/admin", adminRoutes);    
app.use(userRoutes)

app.listen(4000, function () {

    console.log("listening on port 4000");
});