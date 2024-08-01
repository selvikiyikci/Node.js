const express = require("express");
const app = express();

const products = require("./routes/products");
const home = require("./routes/home");

app.use(express.json());

app.use("/api/products" ,products);
app.use("/", home);

app.listen(3000, () => {
    console.log("listening on port 3000");
});