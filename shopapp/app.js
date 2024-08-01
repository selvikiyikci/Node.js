const express = require("express");
const app = express();
const cors = require("cors");

const products = require("./routes/products");
const home = require("./routes/home");

app.use(express.json());
app.use(cors({
    origin : "*",
    methods : ["GET"]
}));

// app.use((req,res,next) => {
//     res.setHeader("Acces-Control-Allow-Origin", "*");
//     res.setHeader("Acces-Control-Allow-Methods","GET");
//     next();
// });

app.use("/api/products" ,products);
app.use("/", home);

app.listen(3000, () => {
    console.log("listening on port 3000");
});