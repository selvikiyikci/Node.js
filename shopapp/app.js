const express = require("express");
const app =  express();



const products = [
    {id : 1, name : "iphone 12", price : 20000},
    {id : 2, name : "iphone 13", price : 30000},
    {id : 3, name : "iphone 14", price : 40000}
];

app.get("/", (req, res) => {
    res.send(products[0]);
    
});
app.get("/api/products", (req, res) => {
    res.send(products);
});

app.get("/api/products/:id", (req, res) => {
 console.log(req.params);
 console.log(req.query);

    const product = products.find(p => p.id == req.params.id);

    if(!product) {
        res.status(404).send("Aradığınız ürün bulunamadı.");
    }
    res.send(product);
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});